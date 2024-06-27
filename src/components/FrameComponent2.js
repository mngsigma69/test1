import WebAppsContent from "./WebAppsContent";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`web-apps-wrapper ${className}`}>
      <div className="web-apps">
        <img className="union-icon" alt="" src="/union.svg" />
        <img className="web-apps-child" alt="" src="/group-2@2x.png" />
        <div className="web-apps-content1">
          <img className="mask-group-icon4" alt="" src="/mask-group5@2x.png" />
          <div className="web-apps-info">
            <div className="web-apps-info-child" />
            <div className="jun-231">21 Jun 23</div>
            <div className="dj-ocean-container">
              <p className="dj-ocean">{`DJ Ocean & Thunder`}</p>
              <p className="indira-nagar-bengaluru">
                Indira Nagar Bengaluru, India
              </p>
            </div>
          </div>
        </div>
        <WebAppsContent
          maskGroup="/mask-group6@2x.png"
          jun23="22 Jun 23"
          dJSLING="DJ SLING"
          koramanglaBengaluruIndia="Koramangla Bengaluru, India"
        />
        <WebAppsContent
          maskGroup="/mask-group7@2x.png"
          jun23="24 Jun 23"
          dJSLING="DJ Deep Bhamra"
          koramanglaBengaluruIndia="Badmaash Bangalore, India"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
