### 시작 및 기능 테스트 하기 위해서 :

`.env` 파일에 API KEY 와 API SECRENT KEY 를 추가 하십시오.

```
REACT_APP_ZOOM_API_KEY=YOUR_ZOOM_API_KEY
REACT_APP_ZOOM_API_SECRET_KEY=YOUR_ZOOM_SECRET_KEY
```

주의사항

1. react 버전과 @zoomus/websdk 버전이 호환이 안되는 경우가 많습니다. 그 외에도 loadash, react-redux, redux-thunk, jquery등 Zoom SDK에서 사용하는 third party 라이브러리들도 버전에 따라 호환이 안되는 경우가 허다했습니다.
   따라서 documentation 과 https://marketplace.zoom.us/docs/sdk/native-sdks/introduction
   forum https://devforum.zoom.us/ 을 정밀하게 검토해야합니다.

2. 오디오, 사운드, 카메라, 로그인, 화상채팅 테스트 완료했습니다. 하지만 약간의 버그가 있습니다.
   -1 마이크와 스피커가 즉시 활성화 되지 않는 경우가 있어서, refresh 를 해야했습니다.
