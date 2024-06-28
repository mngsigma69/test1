import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="rectangle-parent8">
        <div className="frame-child13" />
        <div className="footer-info">
          <div className="logo-container1">
            <img
              className="djfi-logo-main-copy-2"
              alt=""
              src="/djfilogomain-copy-2@2x.png"
            />
          </div>
          <div className="footer-slogan-container">
            <div className="connecting-djs-and">
              Connecting DJs and music enthusiasts for seamless event
              experiences and vibrant community engagement.
            </div>
          </div>
          <div className="footer-buttons">
            <div className="rectangle-parent9">
              <div className="frame-child14" />
             <a href="#" className="sign-up-as31"> <div className="sign-up-as2">Sign Up as User</div></a>
            </div>
            <div className="rectangle-parent10">
              <div className="frame-child15" />
              <a href="#" className="sign-up-as31"> <div className="sign-up-as3">Sign Up as DJ</div></a>
            </div>
          </div>
        </div>
        <div className="under-the-hood-container">
          <p className="under-the-hood-about">
            <b className="under-the-hood">{`Under the Hood

`}</b>
            <a href="#" className="sign-up-as31"><span className="about">About</span></a>
          </p>
          <a href="#" className="sign-up-as31"><p className="use-cases1">Use Cases</p></a> 
          <a href="#" className="sign-up-as31"> <p className="events">Events</p></a>
          <a href="#" className="sign-up-as31"><p className="web-apps2">Web Apps</p></a>
          <a href="#" className="sign-up-as31"> <p className="usage-video1">Usage Video</p></a>
          <a href="#" className="sign-up-as31"><p className="gallery2">Gallery</p></a>
          <a href="#" className="sign-up-as31"><p className="clients-testimonials">Clients Testimonials</p></a>
          <a href="#" className="sign-up-as31"><p className="faq1">{`FAQ `}</p></a>
          <a href="#" className="sign-up-as31"><p className="contact-us">Contact Us</p></a> 
        </div>
        <div className="contact">
          <div className="contact-info">
            <div className="contact-details">
              <div className="helpdesk-91-1234-container">
                <p className="helpdesk">
                <a href="#" className="sign-up-as31"></a>  <b className="helpdesk1">HelpDesk</b>
                </p>
                <p className="blank-line2">
                  <b className="blank-line3">&nbsp;</b>
                </p>
                <a href="#" className="sign-up-as31"><p className="p">{`        +91 1234 5678 90 `}</p></a>
              </div>
              <a href="#" className="sign-up-as31"> <img
                className="whatsapp-1-icon"
                alt=""
                src="/whatsapp-1@2x.png"
              /></a>
            </div>
            <div className="website-link">
              <div className="website-container">
                <div className="mask-group-frame">
                <a href="#" className="sign-up-as31"><img
                    className="mask-group-icon26"
                    alt=""
                    src="/mask-group29@2x.png"
                  /></a> 
                </div>
                <a href="#" className="sign-up-as31"> <div className="teamdjfyappcom1">team@djfyapp.com</div></a>
              </div>
            </div>
          </div>
          <div className="rectangle-parent11">
            <div className="frame-child16" />
            <div className="message-label">
              <div className="send-us-your">Send Us your Message</div>
            </div>
            <div className="form-fields">
              <div className="name-field">
                <div className="name-input">
                  <div className="name-label-container">
                    <div className="frame-parent10">
                      <div className="name-wrapper">
                        <div className="name">Name</div>
                      </div>
                      <div className="name-input-box">
                        <div className="name-input-box-child" />
                      <input type="text" placeholder="Enter Email" className="name"/>
                      </div>
                    </div>
                    <div className="email-field">
                      <div className="message">Message</div>
                    </div>
                  </div>
                  <div className="email-input">
                    <div className="email-label-container">
                      <div className="email">Email</div>
                    </div>
                    <div className="email-input-box">
                    <input type="text" placeholder="Enter Email" className="name"/>
                    </div>
                  </div>
                </div>
                <div className="message-box">
                
                <input type="textArea" placeholder="Enter Messege" className="name1"/>
                </div>
              </div>
              <div className="submission">
                <div className="rectangle-parent12">
                  <div className="frame-child17" />
                  <div className="robot-check">
                    <div className="robot-checkbox">
                      <div className="checkbox" />
                      <div className="im-not-a">I’m not a robot</div>
                    </div>
                  </div>
                  <div className="recaptcha">
                    <div className="recaptcha-logo-container">
                      <img
                        className="recaptchalogo-1-icon"
                        alt=""
                        src="/recaptchalogo-1@2x.png"
                      />
                    </div>
                    <div className="privacy-terms">Privacy-Terms</div>
                  </div>
                </div>
                <div className="rectangle-parent13">
                  <div className="frame-child18" />
                 <a href="#" className="sign-up-as31"> <div className="send-message">Send message</div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
