import PropTypes from "prop-types";
import "./FirstQuestionContainer.css";

const FirstQuestionContainer = ({ className = "" }) => {
  return (
    <div className={`first-question-container ${className}`}>
      <div className="first-question">
        <div className="first-question-content">
          <div className="what-is-djfy">    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseOne">
        What is DJFY?
      </a>
      </div>
      <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div></div>
          <div className="first-question-dropdown-icon-c">
            <img className="eparrow-up-icon2" alt="" src="/eparrowup1@2x.png" />
          </div>
        </div>
        <div className="djfy-is-a">
       
        </div>
      </div>
      <img
        className="first-question-container-child"
        alt=""
        src="/line-18.svg"
      />
      <div className="second-question-container">
        <div className="second-question">
          <div className="how-does-djfy"> <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
        How does DJFY work?
      </a>
      </div>
      <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div></div>
        </div>
        <img className="eparrow-up-icon3" alt="" src="/eparrowup1@2x.png" />
      </div>
      <div className="third-question-container">
        <div className="third-question">
          <img className="third-question-child" alt="" src="/line-18.svg" />
          <div className="third-question-content">
            <div className="free-to-use-question">
              <div className="can-i-use"> <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
        Can I use DJFY for free?
      </a>
      </div>
      <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div></div>
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
          <div className="how-do-i"><div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
        How do I earn money with DJFY? 
      </a>
      </div>
      <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div></div>
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
            <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
        Can I reject song requests on DJFY?
      </a>
      </div>
      <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
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
