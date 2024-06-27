import PropTypes from "prop-types";
import "./WorksWrapper.css";

const WorksWrapper = ({ className = "" }) => {
  return (
    <div className={`works-wrapper ${className}`}>
      <div className="works-description">
        <div className="heres-how-djfy-container">
          <span>{`Here's how `}</span>
          <span className="djfy-works">DJFY works</span>
        </div>
        <div className="works-rating">
          <div className="works-stars">
            <div className="works-star-icons" />
            <div className="works-star-icons1" />
            <div className="works-star-icons2" />
            <div className="works-star-icons3" />
            <div className="works-star-icons4" />
            <div className="works-star-icons5" />
            <div className="works-star-icons6" />
            <div className="works-star-icons7" />
            <div className="works-star-icons8" />
            <div className="works-star-icons9" />
          </div>
        </div>
      </div>
    </div>
  );
};

WorksWrapper.propTypes = {
  className: PropTypes.string,
};

export default WorksWrapper;
