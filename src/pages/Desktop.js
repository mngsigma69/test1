import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import AboutDescription from "../components/AboutDescription";
import WorksWrapper from "../components/WorksWrapper";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import WebAppsCallToAction from "../components/WebAppsCallToAction";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import FirstQuestionContainer from "../components/FirstQuestionContainer";
import SixthQuestionContainer from "../components/SixthQuestionContainer";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-3">
      <div className="header-navigation">
        <img
          className="professional-dj-woman-entertai-icon"
          alt=""
          src="/professionaldjwomanentertainingnight-1@2x.png"
        />
        <div className="about-us-use">About us    Use Cases     Events</div>
        
        <div className="web-app-faq">Web App      FAQ       Contact us</div>
      </div>
      <div className="djfi-logo-main-copy-1" />
      <div className="mail" />
      <FrameComponent7 />
      <div className="content-wrapper-wrapper">
        <div className="content-wrapper">
          <div className="content-wrapper-child" />
          <FrameComponent6 />
          <AboutDescription />
        </div>
      </div>
      <div className="works-content-wrapper">
        <div className="works-content">
          <WorksWrapper />
          <div className="works-steps">
            <FrameComponent5
              freeAccountCreation="Free Account Creation"
              dJsLiveMusiciansbandsAndV="DJs, live musicians/bands, and venue owners can sign up for a free account on DJFY, gaining instant access to a world of new opportunities."
              group2062="/group-2062@2x.png"
            />
            <FrameComponent5
              freeAccountCreation="QR Code Sharing"
              dJsLiveMusiciansbandsAndV="Upon registration, users receive a personalized QR code that they can share with their audience. This QR code acts as a gateway for guests to submit song requests and interact with the performance in real-time."
              group2062="/group-2064@2x.png"
              propPadding="60px 27px 45px"
              propPadding1="0px 1px"
              propAlignSelf="unset"
              propFlex="unset"
              propDisplay="unset"
              propHeight="132px"
              propDisplay1="inline-block"
            />
            <FrameComponent5
              freeAccountCreation="Flexible Monetization Options"
              dJsLiveMusiciansbandsAndV="Musicians have full control over their earnings with DJFY. They can set a minimum bidding amount for each song request or offer free requests to their audience. Additionally, guests have the option to tip the performers, further enhancing the artist's revenue potential."
              group2062="/group-2065@2x.png"
              propPadding="60px 18px 23px"
              propPadding1="0px 0px 0px 1px"
              propAlignSelf="stretch"
              propFlex="1"
              propDisplay="inline-block"
              propHeight="154px"
              propDisplay1="inline-block"
            />
          </div>
          <FrameComponent4 />
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent2 />
      <WebAppsCallToAction />
      <GroupComponent1 />
      <div className="desktop-3-child" />
      <div className="desktop-3-item" />
      <FrameComponent1 />
      <FrameComponent />
      <GroupComponent />
      <div className="f-a-q-container-wrapper">
        <div className="f-a-q-container">
          <img
            className="f-a-q-container-child"
            alt=""
            src="/group-2081@2x.png"
          />
          <div className="f-a-q-title-container-parent">
            <div className="f-a-q-title-container">
              <div className="f-a-q-title">
                <div className="faq">FAQ</div>
                <div className="f-a-q-title-inner">
                  <div className="f-a-q-header-dots-parent">
                    <div className="f-a-q-header-dots" />
                    <div className="f-a-q-header-dots1" />
                    <div className="f-a-q-header-dots2" />
                    <div className="f-a-q-header-dots3" />
                    <div className="f-a-q-header-dots4" />
                    <div className="f-a-q-header-dots5" />
                    <div className="f-a-q-header-dots6" />
                    <div className="f-a-q-header-dots7" />
                    <div className="f-a-q-header-dots8" />
                    <div className="f-a-q-header-dots9" />
                  </div>
                </div>
              </div>
            </div>
            <img className="frame-child" alt="" src="/line-18.svg" />
          </div>
          <FirstQuestionContainer />
          <img className="f-a-q-container-item" alt="" src="/line-18.svg" />
          <SixthQuestionContainer />
          <div className="f-a-q-question-container">
            <div className="f-a-q-question-row">
              <div className="can-i-make">
                Can I make money promoting DJFY App?
              </div>
              <div className="question-dropdown-icon">
                <img
                  className="eparrow-up-icon"
                  alt=""
                  src="/eparrowup1@2x.png"
                />
              </div>
            </div>
            <img
              className="f-a-q-question-container-child"
              alt=""
              src="/line-18.svg"
            />
          </div>
          <div className="f-a-q-question-container1">
            <div className="what-are-djfys-administrative-parent">
              <div className="what-are-djfys">
                {" "}
                What are DJFY's administrative fees and charges?
              </div>
              <div className="eparrow-up-wrapper">
                <img
                  className="eparrow-up-icon1"
                  alt=""
                  src="/eparrowup1@2x.png"
                />
              </div>
            </div>
            <img
              className="f-a-q-question-container-item"
              alt=""
              src="/line-18.svg"
            />
          </div>
        </div>
      </div>
      <div className="footer-background" />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Desktop;
