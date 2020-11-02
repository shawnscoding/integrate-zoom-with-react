### For running and testing:

Add API KEY and API SECRET KEY in `.env` file

```
REACT_APP_ZOOM_API_KEY=YOUR_ZOOM_API_KEY
REACT_APP_ZOOM_API_SECRET_KEY=YOUR_ZOOM_SECRET_KEY
```

AND

```bash
npm install
npm start
```

## Documentation

[Zoom Documentation](https://marketplace.zoom.us/docs/sdk/native-sdks/introduction)

## Zoom Forum

[Zoom Forum](https://devforum.zoom.us/)

## Motivation

I created this project to help those having a hard time to integrate Zoom sdk in reatjs like I did.

## Note

1. There are two css fils in public folder which is dynamically imported into <header> tag depends on the form submission.
2. Please do not change any version of the dependencies in package.json as it might break the app.
3. I have added comments to zoomConfig object to prevent confusion. I hope this is helpful.

```js
const zoomConfig = {
  apiKey: API_KEYS.apiKey, // can create from here https://marketplace.zoom.us/
  apiSecret: API_KEYS.apiSecret, // can create from here https://marketplace.zoom.us/
  meetingNumber: "",
  // meeting id generated when schedule a meeting in https://zoom.us/meeting/schedule
  // !!warning
  // meetingNumber must not have white space between numbers
  // 518 306 2219 - bad format
  // 5183062219 - good format
  leaveUrl: "https://zoom.us/",
  userName: "", // (required)
  userEmail: "", // (optional) must be the attendee email address
  passWord: "",
  // !!warning, this is the passcode for meeting room, not for user password
  role: 0, // 0 for guest, 1 for host
};
```
