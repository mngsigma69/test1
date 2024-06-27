import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CasesGrid.css";

const CasesGrid = ({
  className = "",
  maskGroup,
  barClubVenueDJ,
  inBarsAndClubsOurAppEmpow,
  propWidth,
  propPadding,
  propAlignSelf,
  propPadding1,
  propMinWidth,
  propGap,
}) => {
  const casesGridStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
      minWidth: propMinWidth,
    };
  }, [propPadding1, propMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={`cases-grid ${className}`} style={casesGridStyle}>
      <div className="mask-group-parent">
        <img className="mask-group-icon2" alt="" src={maskGroup} />
        <div className="frame-div" style={frameDivStyle}>
          <div className="frame-parent1" style={frameDiv1Style}>
            <div className="barclubvenue-dj-parent">
              <div className="barclubvenue-dj">{barClubVenueDJ}</div>
              <div className="in-bars-and">{inBarsAndClubsOurAppEmpow}</div>
            </div>
            <div className="rectangle-container">
              <div className="rectangle-div" />
              <div className="register">Register</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CasesGrid.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  barClubVenueDJ: PropTypes.string,
  inBarsAndClubsOurAppEmpow: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propGap: PropTypes.any,
};

export default CasesGrid;
