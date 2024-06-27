import PropTypes from "prop-types";
import "./Copyright.css";

const Copyright = ({ className = "" }) => {
  return (
    <div className={`copyright ${className}`}>
      <div className="copyright-child" />
      <div className="djfy-all-rights">© 2024 DjFy. All Rights Reserved</div>
      <div className="social">
        <div className="connect-">Connect -</div>
        <img className="f-icon1" alt="" src="/f1.svg" />
        <div className="twitter">
          <img className="twitter-icon1" alt="" src="/twitter1.svg" />
        </div>
        <div className="linked-in">
          <img className="linked-in-icon1" alt="" src="/linked-in1.svg" />
        </div>
        <div className="instagram">
          <img className="instagram-icon1" alt="" src="/instagram1.svg" />
        </div>
      </div>
    </div>
  );
};

Copyright.propTypes = {
  className: PropTypes.string,
};

export default Copyright;
