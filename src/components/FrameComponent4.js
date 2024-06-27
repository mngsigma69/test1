import PlaylistContainer from "./PlaylistContainer";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`playlist-content-wrapper ${className}`}>
      <div className="playlist-content">
        <PlaylistContainer
          customizablePlaylist="Customizable Playlist:"
          artistsCanCurateTheirPlay="Artists can curate their playlist on DJFY, giving guests the freedom to choose which songs they want to hear during the performance. This interactive feature enhances audience engagement and ensures a memorable experience for everyone involved."
          group2066="/group-2066@2x.png"
        />
        <PlaylistContainer
          customizablePlaylist="Song Request Management:"
          artistsCanCurateTheirPlay="DJs and musicians have the final say on song requests. They can accept or reject requests based on their preferences and the overall vibe of the event. For paid requests, guests will only be charged if the DJ accepts the request and plays the song within 30 minutes, ensuring a fair and efficient process."
          group2066="/group-2063@2x.png"
          propPadding="60px 15px 1px 23px"
        />
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
