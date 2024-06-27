import WebAppFeaturesTitle from "./WebAppFeaturesTitle";
import CustomerReviewContainer from "./CustomerReviewContainer";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`desktop-3-inner1 ${className}`}>
      <div className="dario-dd-k8tnrcwc-unsplash-cop-group">
        <img
          className="dario-dd-k8tnrcwc-unsplash-cop-icon1"
          alt=""
          src="/dariodd-k8tnrcwcunsplash-copy-3@2x.png"
        />
        <div className="frame-child10" />
        <div className="client-testimonials-title-parent">
          <div className="client-testimonials-title">
            <div className="client-title">
              <WebAppFeaturesTitle
                web="Client"
                apps="Testimonials"
                propAlignSelf="stretch"
                propPadding="0px 20px 0px 22px"
                propWidth="unset"
                propWidth1="371px"
                propGap="10px"
                propPadding1="0px 20px"
                propFlex="unset"
                propWidth2="49px"
              />
              <div className="lorem-ipsum-is-container2">
                <p className="lorem-ipsum-is2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply
                </p>
                <p className="dummy-text-of2">
                  dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="customer-review-container-parent">
            <CustomerReviewContainer
              maskGroup="/mask-group25@2x.png"
              elessaBerg="Elessa Berg"
              managerClub="-Manager @Club"
            />
            <CustomerReviewContainer
              maskGroup="/mask-group26@2x.png"
              elessaBerg="Mark jhon"
              managerClub="-CEO @Pentagon"
              propPadding="70px 21px 48px 22px"
              propBackgroundColor="rgba(219, 30, 45, 0.5)"
              propPadding1="0px 1px 0px 0px"
              propTextShadow="0px 1px 7px rgba(0, 0, 0, 0.5)"
              propPadding2="0px 21px 0px 20px"
            />
            <CustomerReviewContainer
              maskGroup="/mask-group27@2x.png"
              elessaBerg="Tom Kelvis"
              managerClub="-MD @Hexn"
              propPadding="70px 21px 48px 22px"
              propBackgroundColor="rgba(0, 0, 0, 0.66)"
              propPadding1="0px 1px 0px 0px"
              propTextShadow="0px 1px 7px rgba(0, 0, 0, 0.5)"
              propPadding2="0px 20px"
            />
          </div>
        </div>
        <div className="testimonial-carousel-dots">
          <div className="testimonial-dots">
            <div className="testimonial-carousel-dots-shap" />
            <div className="testimonial-carousel-dots-shap1" />
            <div className="testimonial-carousel-dots-shap2" />
            <div className="testimonial-carousel-dots-shap3" />
            <div className="testimonial-carousel-dots-shap4" />
          </div>
        </div>
        <img className="mask-group-icon25" alt="" src="/mask-group28@2x.png" />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
