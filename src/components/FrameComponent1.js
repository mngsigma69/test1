import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`testimonials-navigation-wrapper ${className}`}>
      <div className="testimonials-navigation">
        <div className="testimonials-navigation-contai">
          <div className="testimonials-navigation-dots">
            <div className="testimonials-navigation-dots-inner">
              <div className="frame-parent9">
                <div className="mask-group-wrapper">
                  <img
                    className="mask-group-icon13"
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className="gallery-parent">
                  <div className="gallery1">Gallery</div>
                  <div className="frame-wrapper2">
                    <div className="gallery-dots-parent">
                      <div className="gallery-dots" />
                      <div className="gallery-dots1" />
                      <div className="gallery-dots2" />
                      <div className="gallery-dots3" />
                      <div className="gallery-dots4" />
                      <div className="gallery-dots5" />
                      <div className="gallery-dots6" />
                      <div className="gallery-dots7" />
                      <div className="gallery-dots8" />
                      <div className="gallery-dots9" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lorem-ipsum-is-container1">
              <p className="lorem-ipsum-is1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply
              </p>
              <p className="dummy-text-of1">
                dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonials-image">
          <div className="testimonial-carousel">
            <img
              className="mask-group-icon14"
              alt=""
              src="/mask-group15@2x.png"
            />
            <img
              className="mask-group-icon15"
              alt=""
              src="/mask-group16@2x.png"
            />
          </div>
          <div className="testimonial-carousel1">
            <img
              className="mask-group-icon16"
              alt=""
              src="/mask-group17@2x.png"
            />
            <img
              className="mask-group-icon17"
              alt=""
              src="/mask-group18@2x.png"
            />
          </div>
          <div className="testimonial-carousel2">
            <img
              className="mask-group-icon18"
              alt=""
              src="/mask-group19@2x.png"
            />
            <img
              className="mask-group-icon19"
              alt=""
              src="/mask-group20@2x.png"
            />
          </div>
          <div className="testimonial-carousel3">
            <img
              className="mask-group-icon20"
              alt=""
              src="/mask-group21@2x.png"
            />
            <img
              className="mask-group-icon21"
              alt=""
              src="/mask-group22@2x.png"
            />
          </div>
          <div className="testimonial-carousel4">
            <img
              className="mask-group-icon22"
              alt=""
              src="/mask-group23@2x.png"
            />
            <img
              className="mask-group-icon23"
              alt=""
              src="/mask-group24@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
