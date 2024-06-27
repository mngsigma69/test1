import PropTypes from "prop-types";
import "./WebAppsContent.css";

const WebAppsContent = ({
  className = "",
  maskGroup,
  jun23,
  dJSLING,
  koramanglaBengaluruIndia,
}) => {
  return (
    <div className={`web-apps-content ${className}`}>
      <img className="mask-group-icon3" alt="" src={maskGroup} />
      <div className="rectangle-parent3">
        <div className="frame-child4" />
        <div className="jun-23">{jun23}</div>
        <div className="dj-sling-koramangla-bengaluru-wrapper">
          <div className="dj-sling-koramangla-container">
            <p className="dj-sling">{dJSLING}</p>
            <p className="koramangla-bengaluru-india">
              {koramanglaBengaluruIndia}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

WebAppsContent.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  jun23: PropTypes.string,
  dJSLING: PropTypes.string,
  koramanglaBengaluruIndia: PropTypes.string,
};

export default WebAppsContent;
