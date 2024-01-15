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

new Swiper(".promotion .swiper-container", {
  // direction: "horizontal", // 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수 (기본값 1)
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생
  autoplay: {
    delay: 5000, // 기본값 5초
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionElement = document.querySelector(".promotion");
const promotionToggleButton = document.querySelector(".toggle-promotion");

let isHidingPromotion = false;
promotionToggleButton.addEventListener("click", function () {
  isHidingPromotion = !isHidingPromotion;
  // promotion 요소에 hide라는 클래스 이름을 추가 삭제함으로써 숨김 처리할지 결정
  isHidingPromotion
    ? promotionElement.classList.add("hide")
    : promotionElement.classList.remove("hide");
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true,
    ease: Power1.easeInOut, // https://gsap.com/docs/v3/Eases/ https://gsap.com/docs/v3/GSAP/gsap.to()/
    delay: random(0, delay),
  });
}

floatingObject(".floating", 1, 15);
floatingObject(".floating", 0.5, 15);
floatingObject(".floating", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면 상단이 0, 하단이 1
  }) // 특정한 요소를 감지하는 옵션
    .setClassToggle() // 특정 클래스를 토글
    .addTo(); // controller 추가
});
