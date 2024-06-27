import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CustomerReviewContainer.css";

const CustomerReviewContainer = ({
  className = "",
  maskGroup,
  elessaBerg,
  managerClub,
  propPadding,
  propBackgroundColor,
  propPadding1,
  propTextShadow,
  propPadding2,
}) => {
  const customerReviewContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const customerReviewSeparatorStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const reviewQuotationContainerStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const iAmVeryStyle = useMemo(() => {
    return {
      textShadow: propTextShadow,
    };
  }, [propTextShadow]);

  const reviewerInfoContainerStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div
      className={`customer-review-container ${className}`}
      style={customerReviewContainerStyle}
    >
      <div className="customer-image-container">
        <img className="mask-group-icon24" alt="" src={maskGroup} />
        <div
          className="customer-review-separator"
          style={customerReviewSeparatorStyle}
        />
      </div>
      <div
        className="review-quotation-container"
        style={reviewQuotationContainerStyle}
      >
        <div className="div1">“</div>
      </div>
      <div className="review-content-container">
        <div className="i-am-very" style={iAmVeryStyle}>
          I am very happy the way you present your daily info. And also it helps
          me save time to pick right stock with success.
        </div>
        <div
          className="reviewer-info-container"
          style={reviewerInfoContainerStyle}
        >
          <div className="elessa-berg-manager-container">
            <p className="elessa-berg">
              <b className="elessa-berg1">{elessaBerg}</b>
            </p>
            <p className="manager-club">{managerClub}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomerReviewContainer.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  elessaBerg: PropTypes.string,
  managerClub: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propPadding1: PropTypes.any,
  propTextShadow: PropTypes.any,
  propPadding2: PropTypes.any,
};

export default CustomerReviewContainer;
