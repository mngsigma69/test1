import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`about-image-parent ${className}`}>
      <div className="about-image" />
      <div className="about-content">
        <div className="about-header">
          <img className="about-header-child" alt="" src="/rectangle-3.svg" />
          <div className="app-name">
            <img className="app-name-icon" alt="" src="/app-name-icon.svg" />
            <img className="djfi-icon-1" alt="" src="/djfiicon-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
