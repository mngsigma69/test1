import WebAppFeaturesTitle from "./WebAppFeaturesTitle";
import PropTypes from "prop-types";
import "./GroupComponent1.css";
import A from "./globussoft.mp4";
const GroupComponent1 = ({ className = "" }) => {
  return (
    <div className={`dario-dd-k8tnrcwc-unsplash-cop-parent ${className}`}>
      <img
        className="dario-dd-k8tnrcwc-unsplash-cop-icon"
        alt=""
        src="/dariodd-k8tnrcwcunsplash-copy-2@2x.png"
      />
      <WebAppFeaturesTitle
        web="Usage"
        apps="video"
        propAlignSelf="unset"
        propPadding="unset"
        propWidth="1044px"
        propWidth1="230px"
        propGap="22px"
        propPadding1="0px 20px 0px 21px"
        propFlex="unset"
        propWidth2="49px"
      />
      <div className="testimonials-container">
        <div className="lorem-ipsum-is-container">
          <p className="lorem-ipsum-is">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply
          </p>
          <p className="dummy-text-of">
            dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="testimonials-description">
        <div className="testimonials-description-child" />
        <img className="mask-group-icon6" alt="" src="/mask-group9@2x.png" />
      </div>
      <div className="testimonial-card-container">
        <div className="frame-parent5">
          <div className="mask-group-group">
        
           <video  className="video" src={A} type="video/mp4"  controls> </video>  <div className="frame-child7" />
          </div>
          <a href="a.html">   <img
              className="mask-group-icon12"
              alt=""
              src="/mask-group11@2x.png"
            /></a>
        </div>
        <div className="frame-parent6">
          <div className="frame-parent7">
            <div className="mask-group-container">
              <video  className="video" src={A} type="video/mp4"  controls> </video>  <div className="frame-child7" />
             
              <div className="frame-child8" />
            </div>
           <a href="a.html"> <img
              className="mask-group-icon10"
              alt=""
              src="/mask-group11@2x.png"
            /></a>
          </div>
          <div className="frame-parent8">
            <div className="mask-group-parent1">
            <video  className="video" src={A} type="video/mp4"  controls> </video>  <div className="frame-child7" />

              <div className="frame-child9" />
            </div>
            <a href="a.html">   <img
              className="mask-group-icon12"
              alt=""
              src="/mask-group11@2x.png"
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
