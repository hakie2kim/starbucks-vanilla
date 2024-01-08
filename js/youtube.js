// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 재생할 유튜브 영상 아이디
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playList: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 아이디 목록
    },
    events: {
      // 함수가 속성으로 할당되어 있는 경우 메서드라고 함
      onReady: function (event) {
        event.target.mute(); // 음소거
      }, // 익명 함수
    },
  });
}
