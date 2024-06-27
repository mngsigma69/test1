import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={`dario-dd-k8tnrcwc-unsplash-cop-container ${className}`}>
      <img
        className="dario-dd-k8tnrcwc-unsplash-cop-icon2"
        alt=""
        src="/dariodd-k8tnrcwcunsplash-copy-21@2x.png"
      />
      <div className="search-bar-background" />
      <div className="rectangle-parent6">
        <div className="frame-child11" />
        <div className="the-ultimate-dj"  >The Ultimate DJ Tool</div>
        <div className="rectangle-parent7">
          <div className="frame-child12" />
          <img
            className="iconamoonsearch1"
            alt=""
            src="/iconamoonsearch1.svg"
          />
          <div className="search-venues">{`Search Venues & DJs`}</div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
