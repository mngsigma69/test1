import PropTypes from "prop-types";
import "./FirstQuestionContainer.css";

const FirstQuestionContainer = ({ className = "" }) => {
  return (
    <div className={`first-question-container ${className}`}>
      <div className="first-question">
        <div className="first-question-content">
          <div className="what-is-djfy">What is DJFY?</div>
          <div className="first-question-dropdown-icon-c">
            <img className="eparrow-up-icon2" alt="" src="/eparrowup.svg" />
          </div>
        </div>
        <div className="djfy-is-a">
          DJFY is a web app that revolutionizes the music experience by enabling
          DJs, live musicians/bands, and street performers/musicians to accept
          song requests and interact with their audience in real-time. It
          provides a platform for artists to create a new stream of income while
          enhancing audience engagement during performances.
        </div>
      </div>
      <img
        className="first-question-container-child"
        alt=""
        src="/line-18.svg"
      />
      <div className="second-question-container">
        <div className="second-question">
          <div className="how-does-djfy">How does DJFY work?</div>
        </div>
        <img className="eparrow-up-icon3" alt="" src="/eparrowup1@2x.png" />
      </div>
      <div className="third-question-container">
        <div className="third-question">
          <img className="third-question-child" alt="" src="/line-18.svg" />
          <div className="third-question-content">
            <div className="free-to-use-question">
              <div className="can-i-use">{`Can I use DJFY for free? `}</div>
            </div>
            <img className="eparrow-up-icon4" alt="" src="/eparrowup1@2x.png" />
          </div>
        </div>
        <img
          className="third-question-container-child"
          alt=""
          src="/line-18.svg"
        />
      </div>
      <div className="fourth-question-container">
        <div className="fourth-question">
          <div className="how-do-i">How do I earn money with DJFY?</div>
          <div className="fourth-question-dropdown-icon">
            <img className="eparrow-up-icon5" alt="" src="/eparrowup1@2x.png" />
          </div>
        </div>
        <img
          className="fourth-question-container-child"
          alt=""
          src="/line-18.svg"
        />
        <div className="fifth-question-container">
          <div className="fifth-question">
            <div className="can-i-reject">
              Can I reject song requests on DJFY?
            </div>
          </div>
          <img className="eparrow-up-icon6" alt="" src="/eparrowup1@2x.png" />
        </div>
      </div>
    </div>
  );
};

FirstQuestionContainer.propTypes = {
  className: PropTypes.string,
};

export default FirstQuestionContainer;
