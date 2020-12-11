import React, { useState } from "react";
import Zoom from "./zoom/Zoom";

const API_KEYS = {
  apiKey: process.env.REACT_APP_ZOOM_API_KEY,
  apiSecret: process.env.REACT_APP_ZOOM_API_SECRET_KEY,
};

console.log("API_KEYS ::", API_KEYS)

const zoomConfig = {
  apiKey: API_KEYS.apiKey, // can create from here https://marketplace.zoom.us/
  apiSecret: API_KEYS.apiSecret, // can create from here https://marketplace.zoom.us/
  meetingNumber: "123456789",
  // meeting id generated when schedule a meeting in https://zoom.us/meeting/schedule
  // !!warning
  // meetingNumber must not have white space between numbers
  // 518 306 2219 - bad format
  // 5183062219 - good format
  leaveUrl: "https://zoom.us/",
  userName: "Shawn", // (required)
  userEmail: "", // (optional) must be the attendee email address
  passWord: "",
  // !!warning, this is the passcode for meeting room, not for user password
  role: 0, // 0 for guest, 1 for host
};

const App = () => {

  return (
    <div>
      <Zoom  meetConfig={zoomConfig} />
    </div>
  );
};

export default App;
