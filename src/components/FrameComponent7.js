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
              <div className="whatsapp-support1"><a href="a.html" className="whatsapp-support1" >WhatsApp Support</a></div>
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
              <div className="teamdjfyappcom"><a href="a.html" className="teamdjfyappcom">team@djfyapp.com</a></div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-parent">
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </div>
              <div className="div"><a href="a.html" className="div">+001 2345 6789 90</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-buttons">
        <div className="login-register"><a href="a.html" className="login-register" >Login / Register</a></div>
        <div className="social-icons">
        <a href="a.html"> <img className="f-icon" alt="" src="/f.svg" /></a>
          <div className="twitter-parent">
            <a href="a.html"><img className="twitter-icon" alt="" src="/twitter.svg" /></a>
          </div>
          <a href="a.html"><img className="linked-in-icon" alt="" src="/linked-in.svg" /></a>
          <a href="a.html"> <img className="instagram-icon" alt="" src="/instagram.svg" /></a>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
