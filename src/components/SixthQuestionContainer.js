import PropTypes from "prop-types";
import "./SixthQuestionContainer.css";

const SixthQuestionContainer = ({ className = "" }) => {
  return (
    <div className={`sixth-question-container ${className}`}>
      <div className="seventh-question-container">
        <div className="how-are-paid">
          How are paid song requests handled on DJFY?
        </div>
        <img className="eparrow-up-icon7" alt="" src="/eparrowup1@2x.png" />
      </div>
      <div className="sixth-question-row">
        <img className="sixth-question-row-child" alt="" src="/line-18.svg" />
      </div>
      <div className="sixth-question-row1">
        <div className="is-djfy-available-for-all-type-wrapper">
          <div className="is-djfy-available">
            {" "}
            Is DJFY available for all types of events?
          </div>
        </div>
        <img className="eparrow-up-icon8" alt="" src="/eparrowup1@2x.png" />
      </div>
      <div className="sixth-question-row2">
        <img className="sixth-question-row-item" alt="" src="/line-18.svg" />
      </div>
      <div className="sixth-question-row3">
        <div className="how-do-i-sign-up-for-djfy-wrapper">
          <div className="how-do-i1">How do I sign up for DJFY?</div>
        </div>
        <img className="eparrow-up-icon9" alt="" src="/eparrowup1@2x.png" />
      </div>
      <div className="sixth-question-row4">
        <img className="sixth-question-row-inner" alt="" src="/line-18.svg" />
      </div>
      <div className="sixth-question-row5">
        <div className="can-i-use-djfy-on-my-mobile-de-wrapper">
          <div className="can-i-use1"> Can I use DJFY on my mobile device?</div>
        </div>
        <img className="eparrow-up-icon10" alt="" src="/eparrowup1@2x.png" />
      </div>
      <div className="sixth-question-row6">
        <img className="line-icon" alt="" src="/line-18.svg" />
      </div>
      <div className="eigth-question-container">
        <div className="eigth-question">
          <div className="how-can-i">
            How can I get support if I have questions or issues with DJFY?
          </div>
          <img className="eparrow-up-icon11" alt="" src="/eparrowup1@2x.png" />
        </div>
        <img
          className="eigth-question-container-child"
          alt=""
          src="/line-18.svg"
        />
      </div>
    </div>
  );
};

SixthQuestionContainer.propTypes = {
  className: PropTypes.string,
};

export default SixthQuestionContainer;
