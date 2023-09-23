import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

//** Create element Portal witd id "portal-wrapper"

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}

const portalWrapperEle = createPortalWrapper();

const Portal = ({ containerClassName = "", containerStyle = "" }) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperEle);
  }, []);

  const renderContent = (
    <div className={containerClassName} style={containerStyle}></div>
  );
  return createPortal(renderContent, portalWrapperEle);
};

Portal.propTypes = {
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.string,
};

export default Portal;
