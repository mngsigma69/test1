import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PlaylistContainer.css";

const PlaylistContainer = ({
  className = "",
  customizablePlaylist,
  artistsCanCurateTheirPlay,
  group2066,
  propPadding,
}) => {
  const playlistWrapperStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`playlist-container ${className}`}>
      <div className="playlist-wrapper" style={playlistWrapperStyle}>
        <div className="playlist-wrapper-child" />
        <div className="playlist-items">
          <div className="customizable-playlist">{customizablePlaylist}</div>
        </div>
        <div className="artists-can-curate">{artistsCanCurateTheirPlay}</div>
      </div>
      <div className="playlist-icon-container">
        <div className="playlist-icons-wrapper">
          <div className="playlist-step-icons" />
          <img
            className="playlist-icons-wrapper-child"
            alt=""
            src={group2066}
          />
        </div>
      </div>
    </div>
  );
};

PlaylistContainer.propTypes = {
  className: PropTypes.string,
  customizablePlaylist: PropTypes.string,
  artistsCanCurateTheirPlay: PropTypes.string,
  group2066: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default PlaylistContainer;
