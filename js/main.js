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
