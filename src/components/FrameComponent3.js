import CasesGrid from "./CasesGrid";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`desktop-3-inner ${className}`}>
      <div className="group-div">
        <div className="frame-child1" />
        <div className="cases-container">
          <div className="cases-header">
            <div className="use-cases">
              <span>Use</span>
              <span className="span1">{` `}</span>
              <span className="cases">Cases</span>
            </div>
            <div className="cases-rating">
              <div className="cases-stars">
                <div className="cases-star-icons" />
                <div className="cases-star-icons1" />
                <div className="cases-star-icons2" />
                <div className="cases-star-icons3" />
                <div className="cases-star-icons4" />
                <div className="cases-star-icons5" />
                <div className="cases-star-icons6" />
                <div className="cases-star-icons7" />
                <div className="cases-star-icons8" />
                <div className="cases-star-icons9" />
              </div>
            </div>
          </div>
        </div>
        <CasesGrid
          maskGroup="/mask-group2@2x.png"
          barClubVenueDJ="Bar/Club/Venue DJ"
          inBarsAndClubsOurAppEmpow="In bars and clubs, our app empowers guests to influence the music and request their song. With a simple scan and tap, they request songs from Spotify or Youtube library, while DJs curate a playlist that keeps the dance floor packed. It's a seamless experience that adds excitement to every night out."
        />
        <div className="frame-parent2">
          <div className="frame-wrapper1">
            <div className="frame-parent3">
              <div className="frame-parent4">
                <div className="musicians-bands-wrapper">
                  <div className="musicians-bands">Musicians / Bands</div>
                </div>
                <div className="musicians-and-bands">
                  Musicians and bands use our app to connect with fans during
                  live shows. By displaying a QR code, they invite the audience
                  to request songs. Fans scan the code browse the playlist, and
                  submit requests, making each performance unique and
                  interactive.
                </div>
              </div>
              <div className="musicians-register-button">
                <div className="rectangle-parent1">
                  <div className="frame-child2" />
                  <div className="register1">Register</div>
                </div>
              </div>
            </div>
          </div>
          <img className="group-icon" alt="" src="/group-2033@2x.png" />
        </div>
        <CasesGrid
          maskGroup="/mask-group3@2x.png"
          barClubVenueDJ="Wedding / Private Event"
          inBarsAndClubsOurAppEmpow="Our song request app makes weddings magical by letting guests shape the playlist. With each song choice submitted through the app, the DJ crafts a soundtrack that reflects the couple's love story. From tear-jerking ballads to dance-floor anthems, every song becomes a part of the celebration, uniting guests in joy and love.  "
          propWidth="1052px"
          propPadding="0px 3px 16px"
          propAlignSelf="unset"
          propPadding1="30px 0px 0px"
          propMinWidth="359px"
          propGap="40px"
        />
        <div className="karaoke-event">
          <div className="karaoke-event-content">
            <div className="karaoke-event-details">
              <div className="karaoke-event-title">
                <div className="karaoke-event-heading">
                  <div className="karaoke-event1">Karaoke Event</div>
                </div>
                <div className="karaoke-event-register">
                  <div className="at-karaoke-events">
                    At karaoke events with a DJ, our app makes singing seamless
                    and fun. Guests scan the DJ's QR code to access the event in
                    the app and choose their favorite songs. The DJ receives
                    requests in real-time, keeping the energy high and ensuring
                    everyone gets their moment in the spotlight.
                  </div>
                  <div className="rectangle-parent2">
                    <div className="frame-child3" />
                    <div className="register2">Register</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="street-performer-content"
              alt=""
              src="/street-performer-content@2x.png"
            />
          </div>
          <CasesGrid
            maskGroup="/mask-group4@2x.png"
            barClubVenueDJ="Street Performer/Artist"
            inBarsAndClubsOurAppEmpow="Street musicians enhance their performances with our app and QR codes. Passersby scan the code to access the musician's playlist and request songs, making each street performance personal and engaging. This interaction not only deepens the connection between artist and audience but also provides  valuable feedback for the performer."
            propWidth="unset"
            propPadding="0px 10px 0px 3px"
            propAlignSelf="stretch"
            propPadding1="0px 0px 23px"
            propMinWidth="352px"
            propGap="34px"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
