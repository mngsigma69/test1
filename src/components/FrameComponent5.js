import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  freeAccountCreation,
  dJsLiveMusiciansbandsAndV,
  group2062,
  propPadding,
  propPadding1,
  propAlignSelf,
  propFlex,
  propDisplay,
  propHeight,
  propDisplay1,
}) => {
  const stepsContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const stepsWrapperStyle = useMemo(() => {
    return {
      padding: propPadding1,
      alignSelf: propAlignSelf,
    };
  }, [propPadding1, propAlignSelf]);

  const freeAccountCreationStyle = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
    };
  }, [propFlex, propDisplay]);

  const dJsLiveMusiciansbandsStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay1,
    };
  }, [propHeight, propDisplay1]);

  return (
    <div className={`steps-container-parent ${className}`}>
      <div className="steps-container" style={stepsContainerStyle}>
        <div className="steps-container-child" />
        <div className="steps-wrapper" style={stepsWrapperStyle}>
          <div
            className="free-account-creation"
            style={freeAccountCreationStyle}
          >
            {freeAccountCreation}
          </div>
        </div>
        <div
          className="djs-live-musiciansbands"
          style={dJsLiveMusiciansbandsStyle}
        >
          {dJsLiveMusiciansbandsAndV}
        </div>
      </div>
      <div className="steps-icons-container">
        <div className="steps-icons-wrapper">
          <div className="step-icons" />
          <img className="steps-icons-wrapper-child" alt="" src={group2062} />
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  freeAccountCreation: PropTypes.string,
  dJsLiveMusiciansbandsAndV: PropTypes.string,
  group2062: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay1: PropTypes.any,
};

export default FrameComponent5;
