import { useMemo } from "react";
import PropTypes from "prop-types";
import "./WebAppFeaturesTitle.css";

const WebAppFeaturesTitle = ({
  className = "",
  web,
  apps,
  propAlignSelf,
  propPadding,
  propWidth,
  propWidth1,
  propGap,
  propPadding1,
  propFlex,
  propWidth2,
}) => {
  const webAppFeaturesTitleStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  const webAppFeaturesDescriptionStyle = useMemo(() => {
    return {
      width: propWidth1,
      gap: propGap,
    };
  }, [propWidth1, propGap]);

  const webAppButtonContainerStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const usageVideoStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth2,
    };
  }, [propFlex, propWidth2]);

  return (
    <div
      className={`web-app-features-title ${className}`}
      style={webAppFeaturesTitleStyle}
    >
      <div
        className="web-app-features-description"
        style={webAppFeaturesDescriptionStyle}
      >
        <div className="web-apps1">
          <span>{web}</span>
          <span className="span2">{` `}</span>
          <span className="apps">{apps}</span>
        </div>
        <div
          className="web-app-button-container"
          style={webAppButtonContainerStyle}
        >
          <div className="usage-video" style={usageVideoStyle}>
            <div className="usage-video-container" />
            <div className="usage-video-container1" />
            <div className="usage-video-container2" />
            <div className="usage-video-container3" />
            <div className="usage-video-container4" />
            <div className="usage-video-container5" />
            <div className="usage-video-container6" />
            <div className="usage-video-container7" />
            <div className="usage-video-container8" />
            <div className="usage-video-container9" />
          </div>
        </div>
      </div>
    </div>
  );
};

WebAppFeaturesTitle.propTypes = {
  className: PropTypes.string,
  web: PropTypes.string,
  apps: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propGap: PropTypes.any,
  propPadding1: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default WebAppFeaturesTitle;
