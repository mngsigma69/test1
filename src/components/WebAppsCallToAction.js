import WebAppFeaturesTitle from "./WebAppFeaturesTitle";
import PropTypes from "prop-types";
import "./WebAppsCallToAction.css";

const WebAppsCallToAction = ({ className = "" }) => {
  return (
    <div className={`web-apps-call-to-action ${className}`}>
      <div className="web-apps-button">
        <div className="web-app-illustration">
          <div className="web-app-features">
            <div className="web-app-features-image">
              <img
                className="mask-group-icon5"
                alt=""
                src="/mask-group8@2x.png"
              />
            </div>
            <WebAppFeaturesTitle web="Web" apps="apps" />
            <div className="scan-the-qr">
              Scan the QR Code, Connect to the event and request your song . No
              need to Download or install any App.
            </div>
          </div>
        </div>
        <div className="usage-video-description">
          <img className="b872e8-1-icon" alt="" src="/85b872e8-1@2x.png" />
        </div>
        <div className="usage-video-player">
          <div className="gallery">
            <div className="gallery-container">
              <div className="gallery-title">
                <div className="gallery-description" />
                <div className="gallery-description1" />
                <div className="gallery-description2" />
                <div className="gallery-description3" />
                <div className="gallery-description4" />
              </div>
            </div>
            <div className="gallery-images">
              <div className="rectangle-parent4">
                <div className="frame-child5" />
                <div className="sign-up-as">Sign Up as User</div>
              </div>
              <div className="rectangle-parent5">
                <div className="frame-child6" />
                <div className="sign-up-as1">Sign Up as DJ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WebAppsCallToAction.propTypes = {
  className: PropTypes.string,
};

export default WebAppsCallToAction;
