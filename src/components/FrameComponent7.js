import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent ${className}`}>
      <div className="frame-item" />
      <div className="hero-content">
        <div className="social-media-parent">
          <div className="social-media">
            <img className="whatsapp-icon" alt="" src="/whatsapp.svg" />
            <div className="whatsapp-support">
              <div className="whatsapp-support1">WhatsApp Support</div>
            </div>
          </div>
          <div className="logo-pair-wrapper">
            <div className="logo-pair">
              <div className="logo-container">
                <img
                  className="logo-container-child"
                  alt=""
                  src="/group-4.svg"
                />
              </div>
              <div className="teamdjfyappcom">team@djfyapp.com</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-parent">
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </div>
              <div className="div">+001 2345 6789 90</div>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-buttons">
        <div className="login-register">Login / Register</div>
        <div className="social-icons">
          <img className="f-icon" alt="" src="/f.svg" />
          <div className="twitter-parent">
            <img className="twitter-icon" alt="" src="/twitter.svg" />
          </div>
          <img className="linked-in-icon" alt="" src="/linked-in.svg" />
          <img className="instagram-icon" alt="" src="/instagram.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
