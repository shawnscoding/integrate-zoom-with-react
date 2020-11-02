import React, { useState } from "react";
import useStyles from "./hook/UseStyles";
import Zoom from "./zoom/Zoom";

const API_KEYS = {
  apiKey: process.env.REACT_APP_ZOOM_API_KEY,
  apiSecret: process.env.REACT_APP_ZOOM_API_SECRET_KEY,
};

const PATH = {
  formCssUrl: process.env.REACT_APP_ZOOM_FORM_CSS_URL,
  mainCssUrl: process.env.REACT_APP_ZOOM_MAIN_CSS_URL,
};

console.log("api key ::", API_KEYS.apiKey);
console.log("api key ::", API_KEYS.apiSecret);
console.log("PATH ::", PATH);

const App = () => {
  const [config, setConfig] = useState({
    apiKey: API_KEYS.apiKey,
    apiSecret: API_KEYS.apiSecret,
    meetingNumber: "", // meeting id generated when schedule a meeting in https://zoom.us/meeting/schedule
    // !!warning
    // meetingNumber must not have white space between numbers
    // 518 306 2219 - bad format
    // 5183062219 - good format
    leaveUrl: "https://zoom.us/",
    userName: "", // (required)
    userEmail: "", // (optional) must be the attendee email address
    passWord: "", // !!warning, this is the passcode for meeting room, not for user password
    role: 0, // 0 for guest, 1 for host
  });
  const [isSubmitted, setIsSubmitted] = useState({
    stylePath: PATH.formCssUrl,
    status: false,
  });
  const { userName, userEmail } = config;
  const { stylePath } = isSubmitted;

  const handleChange = (e) => {
    setConfig({
      ...config,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("called");
    e.preventDefault();
    if (!userName.length) return;

    setIsSubmitted({
      stylePath: PATH.mainCssUrl,
      status: true,
    });
  };

  useStyles(stylePath);

  return (
    <div className="custom-zn__container">
      <div className="custom-zm__modal">
        <div className="custom-zm__title__box">
          <h1 className="custom-zm__title">Welcome to Zoom</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="custom-zm__modal__label" htmlFor="userName">
            User Name (required*)
            <input
              type="text"
              value={userName}
              className="custom-zm__modal__input"
              onChange={handleChange}
              id="userName"
              placeholder="User Name"
            />
          </label>
          <label className="custom-zm__modal__label" htmlFor="userEmail">
            Email (optional)
            <input
              type="email"
              value={userEmail}
              className="custom-zm__modal__input"
              onChange={handleChange}
              id="userEmail"
              placeholder="Email"
            />
          </label>
          <div className="custom-zm__btn__box">
            <button className="custom-zm__btn" type="submit">
              Submit
            </button>
          </div>
        </form>

        <Zoom isSubmitted={isSubmitted} meetConfig={config} />
      </div>
    </div>
  );
};

export default App;
