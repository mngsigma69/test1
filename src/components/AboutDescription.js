import PropTypes from "prop-types";
import "./AboutDescription.css";

const AboutDescription = ({ className = "" }) => {
  return (
    <div className={`about-description ${className}`}>
      <div className="frame-group">
        <div className="frame-container">
          <div className="rectangle-group">
            <div className="frame-inner" />
            <img
              className="iconamoonsearch"
              alt=""
              src="/iconamoonsearch.svg"
            />
          </div>
        </div>
        <div className="description-content">
          <div className="paragraph-container">
            <div className="paragraph-wrapper">
              <div className="about-djfy-parent">
                <div className="about-djfy">
                  <span>About</span>
                  <span className="span">{` `}</span>
                  <span className="djfy">DJFY</span>
                </div>
                <div className="rating-stars">
                  <div className="star-icons" />
                  <div className="star-icons1" />
                  <div className="star-icons2" />
                  <div className="star-icons3" />
                  <div className="star-icons4" />
                  <div className="star-icons5" />
                  <div className="star-icons6" />
                  <div className="star-icons7" />
                  <div className="star-icons8" />
                  <div className="star-icons9" />
                </div>
              </div>
              <div className="introducing-djfy-the-container">
                <p className="introducing-djfy-the">
                  Introducing DJFY, the ultimate platform revolutionizing the
                  music industry by offering a seamless alternative stream of
                  income for DJs, live musicians/bands, and street
                  performers/musicians. With DJFY, every artist and venue owner
                  can easily create a free account and receive a unique QR code
                  to share with their audience, unlocking the power of
                  interactive music experiences like never before.
                </p>
                <p className="blank-line">&nbsp;</p>
                <p className="with-djfy-artists">
                  With DJFY, artists and venues can tap into a new revenue
                  stream while providing an immersive and interactive music
                  experience for their audience. Join DJFY today and unlock the
                  potential of your performances like never before!
                </p>
                <p className="blank-line1">&nbsp;</p>
              </div>
            </div>
            <div className="about-cta">
              <img
                className="mask-group-icon"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="wrapper-mask-group">
                <img
                  className="mask-group-icon1"
                  alt=""
                  src="/mask-group1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutDescription.propTypes = {
  className: PropTypes.string,
};

export default AboutDescription;
