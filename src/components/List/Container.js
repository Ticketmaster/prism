import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { ContainerProvider } from "./Context";
import DisplayFor from "../DeviceSize";
import Portal from "../Portal";
import Backdrop from "./Backdrop";
import BottomSheet from "../BottomSheet";
import Modal from "./Modal";
import { updateOpenIndex, determineIfOpen } from "./helper";

const noop = () => {};

const Container = styled.div`
  width: 100%;
`;

const ITEMS_COLLAPSED = -1;

class ListContainer extends Component {
  state = {
    openIndex: ITEMS_COLLAPSED,
    expandMultiple: this.props.expandMultiple,
    mobilePortalContent: null,
    desktopPortalContent: null,
    portalContentData: null
  };

  // Only used by modal on mobile devices
  onCloseRequest = () => {
    if (this.state.desktopPortalContent) {
      this.setState({ desktopPortalContent: null });
      this.props.onModalClose();
    }
    if (this.state.mobilePortalContent) {
      this.setState({
        openIndex: ITEMS_COLLAPSED
      });

      this.props.onRowCollapse();
    }
  };

  // Only used on tablet/desktop devices
  onExpandOrCollapse = event => {
    const { className, dataset } = event.target;
    const { index } = dataset;

    if (!className || className.constructor !== String) {
      return null;
    }

    if (
      className.includes("button--expand-or-collapse") ||
      className.includes("button--more-info") ||
      (className.includes("link--row-options") &&
        !determineIfOpen(
          this.state.expandMultiple,
          this.state.openIndex,
          parseInt(index, 10)
        ))
    ) {
      event.preventDefault();

      const { openIndex, expandMultiple } = this.state;
      const dataIndex = parseInt(index, 10);

      if (dataIndex > -1) {
        return this.setState({
          openIndex: updateOpenIndex(expandMultiple, openIndex, dataIndex)
        });
      }
    }
    return null;
  };

  resetOpenIndex = () => this.setState({ openIndex: ITEMS_COLLAPSED });

  renderIntoPortal = ({ children, contentType, data: portalContentData }) =>
    contentType === "mobile"
      ? this.setState({ mobilePortalContent: children, portalContentData })
      : this.setState({ desktopPortalContent: children, portalContentData });

  render() {
    const { children, ...rest } = this.props;
    const {
      mobilePortalContent,
      desktopPortalContent,
      openIndex,
      portalContentData
    } = this.state;
    const isBottomSheetOpen =
      openIndex !== ITEMS_COLLAPSED && !!mobilePortalContent;
    const { label, labelVariant } = portalContentData || {};

    const ContainerProviderValue = {
      ...this.state,
      onCloseRequest: this.onCloseRequest,
      renderIntoPortal: this.renderIntoPortal,
      resetOpenIndex: this.resetOpenIndex
    };

    return (
      <Container onClick={this.onExpandOrCollapse} {...rest}>
        <ContainerProvider value={ContainerProviderValue}>
          {children}
          <DisplayFor small>
            <Portal>
              <CSSTransition
                classNames="bottom-sheet"
                timeout={300}
                in={isBottomSheetOpen}
                appear
                unmountOnExit
                mountOnEnter
              >
                <Backdrop>
                  <BottomSheet
                    index={openIndex}
                    label={label}
                    labelVariant={labelVariant}
                  >
                    {mobilePortalContent}
                  </BottomSheet>
                </Backdrop>
              </CSSTransition>
            </Portal>
          </DisplayFor>

          <DisplayFor medium large xLarge>
            <Portal>
              <CSSTransition
                classNames="modal"
                timeout={{
                  enter: 300,
                  exit: 100
                }}
                in={!!desktopPortalContent}
                appear
                unmountOnExit
                mountOnEnter
              >
                <Backdrop>
                  <Modal>{desktopPortalContent}</Modal>
                </Backdrop>
              </CSSTransition>
            </Portal>
          </DisplayFor>
        </ContainerProvider>
      </Container>
    );
  }
}

ListContainer.defaultProps = {
  onRowCollapse: noop,
  onModalClose: noop,
  expandMultiple: false
};

ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onRowCollapse: PropTypes.func,
  onModalClose: PropTypes.func,
  expandMultiple: PropTypes.bool
};

export default ListContainer;
