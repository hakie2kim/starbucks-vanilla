const searchElement = document.querySelector(".search");
const searchInputElement = searchElement.querySelector("input");

// div search인 요소를 클릭하면 input 요소가 포커스 되도록 한다.
searchElement.addEventListener("click", function () {
  searchInputElement.focus();
});

// input 요소가 포커스되면 div search인 요소의 클래스 이름에 focused 추가
searchInputElement.addEventListener("focus", function () {
  searchElement.classList.add("focused");
  searchInputElement.setAttribute("placeholder", "통합검색");
});

// input 요소가 블러되면 div search인 요소의 클래스 이름에 focused 제거
searchInputElement.addEventListener("blur", function () {
  searchElement.classList.remove("focused");
  searchInputElement.setAttribute("placeholder", "");
});

const badgeElement = document.querySelector("header .badges");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY); // 화면 위에서 몇 픽셀 지점에 위치해 있는지 알려줌
    if (window.scrollY > 500) {
      // 배지 숨기기
      // badgeElement.style.display = "none";
      // 부자연스러워서 gsap 라이브러리 사용 gsap.to(요소, 지속시간(초), 옵션)
      gsap.to(badgeElement, 0.6, {
        opacity: 0,
        display: "none", // <-> visibility: "hidden" 영역 차지 O
      });
    } else {
      // 배지 보이기
      //  badgeElement.style.display = "block";
      gsap.to(badgeElement, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
); // lodash 라이브러리 사용, _.throttle(함수, 시간)

const fadeElements = document.querySelectorAll(".visual .fade-in");
fadeElements.forEach(function (fadeElement, index) {
  // gsap.to(요소, 지속시간(초), 옵션)
  gsap.to(fadeElement, 1, {
    delay: (index + 1) * 0.7, // 지연 시간 각각 0.7, 1.4, 2.1
    opacity: 1,
  });
});

// 자바스크립트 생성자 new Swiper(선택자, 옵션);
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
