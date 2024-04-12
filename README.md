# 스타벅스 클론코딩

## 🔗 배포 링크

https://starbucks-vanila-332ozqw52-hakie2kims-projects.vercel.app/

## 🔨 과정

1. 페이지 각 영역 별 단계적 개발
2. 자바스크립트 애니메이션 적용

https://github.com/hakie2kim/starbucks-vanilla/commits/main/

## 🔍 HTML 핵심 정리

### 요소의 종류와 특징

|                                               | 인라인 요소 예) `<span>`       | 블럭 요소 예) `<div>`             | 인라인 블럭 요소 예) `<input>` |
| --------------------------------------------- | ------------------------------ | --------------------------------- | ------------------------------ |
| 정의                                          | 글자를 만들기 위한 요소        | 상자(레이아웃)를 만들기 위한 요소 | 인라인 + 블럭 요소             |
| 자동으로 줄어드는 영역 (상하 또는 좌우)       | 상하, 좌우                     | 상하                              | -                              |
| 요소가 `_____`로 쌓임                         | 수평, 태그끼리의 줄바꿈은 공백 | 수직                              | 수평                           |
| 상하, 좌우 사이즈(height, width) 지정         | 불가능                         | 가능                              | 가능                           |
| 좌우 여백(margin (외부), padding (내부)) 지정 | 가능                           | 가능                              | 가능                           |
| 상하 여백 지정                                | 불가능                         | 가능                              | 가능                           |
| 내용으로 인라인 요소                          | O                              | X                                 | -                              |
| 내용으로 블럭 요소                            | O                              | O                                 | -                              |

#### 인라인 요소

- `<label></label>`: 글자와 input 요소를 묶어줌
- 예1) `checkbox`
  ```html
  <label> <input type="checkbox" />Apple (라벨 가능한 요소의 제목) </label>
  <label> <input type="checkbox" checked />Banana </label>
  ```
- 예2) `radio`
  ```html
  <label> <input type="radio" name="fruits" />Apple </label>
  <label> <input type="radio" name="fruits" />Banana </label>
  ```
  `name` 속성: `input`을 그룹화

### 속성의 종류

- 전역 속성: 모든 요소에서 사용가능한 속성

- `title`: 요소의 정보나 설명을 지정

- `style`: 요소의 적용할 스타일(css) 지정

- `class`: 요소의 **중복 가능**한 이름을 지정해주는 속성

- `id`: 요소의 **고유**한 이름을 지정해주는 속성

- `data-이름="데이터"`: 요소에 데이터를 지정, 주로 js에서 사용

  ```html
  <div data-fruit-name="apple">사과</div>
  <div data-fruit-name="banana">바나나</div>
  ```

  ```javascript
  const elements = document.querySelectorAll("div");
  elements.forEach((element) => {
    console.log(element.dataset.fruitName);
  });
  ```

## 🔍 CSS 핵심 정리

### 브라우저 스타일 초기화

브라우저 간의 차이를 최대한 없애, 브라우저 요소들의 스타일이 없는 상태에서 디자인을 만들어 나가기 위해 생겨난 것이다.

⇨ 크로스브라우징 (= 브라우저마다 동일한 모양) 구현할 때 유용

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css"
/>
```

[출처] https://www.jsdelivr.com/package/npm/reset-css?tab=files

### CSS 선택자

#### 기본 선택자

순서대로 점수가 높다.

- `*` (전체 선택자): 모든 요소를 선택
- `태그 이름` (태그 선택자): 태그 이름으로 요소 선택
- `.html class 속성의 값` (클래스 선택자): html class 속성의 값으로 요소 선택
- `#html id 속성의 값` (id 선택자): html id 속성의 값으로 요소 선택

#### 복합 선택자

기본 선택자를 조합해서 사용한다.

- `기본선택자1기본선택자2` (일치 선택자): 두개의 기본 선택자를 동시에 만족하는 요소 선택
- `기본선택자1 > 기본선택자2` (자식 선택자): `기본선택자1`의 자식 요소 `기본선택자2` 모두 선택
- `기본선택자1 기본선택자2` (하위 선택자): `기본선택자1`의 하위 요소 `기본선택자2` 모두 선택
- `기본선택자1 + 기본선택자2` (인접 형제 선택자): `기본선택자1`의 다음 형제 요소 `기본선택자2` 하나 선택
- `기본선택자1 ~ 기본선택자2` (일반 형제 선택자): `기본선택자1`의 다음 형제 요소 `기본선택자2` 모두 선택

#### 가상 클래스 선택자 (`:`)

- `a:link` (link 선택자): 방문하지 않은 링크 선택
- `a:visited` (visited 선택자): 방문한 링크 선택
- `기본선택자:hover` (hover 선택자): `기본선택자` 요소에 마우스 커서가 올라가 있는 동안 선택
- `기본선택자:active` (active 선택자): `기본선택자` 요소에 마우스를 클릭하고 있는 동안 선택
- `기본선택자:focus` (focus 선택자): `기본선택자` 요소가 포커스되면 선택

  - focus 가능한 요소 정해져있음: html 대화형 콘텐츠 예) `input`, `a`, `button`, `label`, `select`

- `기본선택자1 기본선택자2:first-child` (first child 선택자): `기본선택자2`가 형제 요소 중 첫째라면 선택
- `기본선택자1 기본선택자2:last-child` (last child 선택자): `기본선택자2`가 형제 요소 중 막내라면 선택
- `기본선택자1 기본선택자2:nth-child(n)` (nth child 선택자): `기본선택자2`가 형제 요소 중 `n`번째라면 선택

  - `기본선택자2`는 주로 `*` (전체 선택자)
  - `n`에는 숫자 또는 `n`을 변형한 식이 들어올 수 있음 예) `2n`, `2n+1`, `n+2` (`n`은 0부터 시작)

- `기본선택자1 기본선택자2:not(기본선택자3)` (not 선택자): `기본선택자3`이 아닌 `기본선택자2` 요소 선택
  - `기본선택자2`는 주로 `*` (전체 선택자)

#### 가상 요소 선택자 (::)

각 요소의 앞 뒤를 꾸며주기 위해 가상의 요소를 만들어 삽입하는데 사용한다.

- `before` 선택자: `기본선택자`의 내부 앞에 `content`의 값을 인라인 요소로 삽입

  ```css
  기본선택자::before {
    content: "내용";
  }
  ```

- `after` 선택자: `기본선택자`의 내부 뒤에 `content`의 값을 인라인 요소로 삽입

  ```css
  기본선택자::after {
    content: "내용";
  }
  ```

- 예)

  ```css
  .box::after {
    content: ""; // 무조건 있어야 함
    display: block; // 인라인 요소 -> 블럭 요소
    width: 30px;
    height: 30px;
    background-color: royalblue;
  }
  ```

#### 속성 선택자

- `[속성]`: `속성`을 포함한 요소 선택

  - 주로 `disabled`와 같은 공통적이지 않은 속성에 적용

- `[속성="값"]`: `속성`의 `값`이 `값`인 요소 선택

### 너비

|               |                인라인 요소                 |                 블럭 요소                  |
| :-----------: | :----------------------------------------: | :----------------------------------------: |
| width = auto  | (포함한 콘텐츠의 크기만큼) 자동으로 줄어듦 |   (부모 요소의 크기만큼) 자동으로 늘어남   |
| height = auto | (포함한 콘텐츠의 크기만큼) 자동으로 줄어듦 | (포함한 콘텐츠의 크기만큼) 자동으로 줄어듦 |

### 단위

- `px`: 화면의 픽셀 (하나의 점)
- `%`: 상대적 백분율
- `em`: 요소의 글꼴 크기
- `rem`: 루트 요소(html)의 글꼴 크기

  - 브라우저의 기본 폰트 사이즈는 16px -> 10em = 160px

    ```css
    html {
      font-size: 16px;
    }
    ```

- `vw`: 뷰포트(브라우저 화면에 표시되는 페이지 전체의 영역) 가로 너비의 백분율
- `vh`: 뷰포트 세로 너비의 백분율

### 외부 여백

- `margin: auto;`: 블록 요소이고 `width` 값이 정해진 경우 → 가운데 정렬됨

### 크기 계산

- `box-sizing`: 요소의 크기 계산 기준을 지정

|              |     값      |           크기 계산            | padding, border 적용 시 |
| :----------: | :---------: | :----------------------------: | :---------------------: |
|    기본값    | content-box |     요소의 내용 (content)      |    요소의 크기 커짐     |
| 다른 값 지정 | border-box  | 요소의 내용 + padding + border |   요소의 크기 작아짐    |

### 넘침 제어

- `overflow`: 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성
  - 기본값: `visible` (넘친 내용을 그대로 보여줌)
  - 다른 값 지정: `hidden` (넘친 내용을 잘라냄), `auto` (넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성)

### 배치

- `position`: 요소의 위치 지정 기준
- 기본값: `static` (기준 없음)
- 다른 값 지정

  |          | 기준                                                                                            | display 속성                                                    |
  | :------: | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
  | relative | 단독으로 사용되지 않고 주로 absolute랑 같이 쓰임 (단독으로 사용하면 원래 있던 자리가 비어 있음) | -                                                               |
  | absolute | 위치 상 부모 요소 (부모 요소 중 position 값이 static이 아닌 값이 처음으로 나올 때)              | block으로 변경 (width가 auto이면 가로 너비가 최소한으로 줄어듦) |
  |  fixed   | 뷰포트                                                                                          | block으로 변경 (width가 auto이면 가로 너비가 최소한으로 줄어듦) |

### flex container(부모)와 flex item(자식)

#### flex container(부모)에 부여하는 속성

##### `display`: flex container의 화면 출력(보여짐) 특성, **아래 4개의 속성들**이 자동으로 지정됨

- 다른 값 지정: `flex` (**블록** 요소와 같이 flex container 정의) ↔ `inline-flex` (**인라인** 요소와 같이 flex container 정의)
- [주의] flex container 안에 있는 아이템들이 아닌 flex container끼리의 레이아웃임
- [참고] 출력 특성
  | | 영역 차지 |
  |:-------------------:|:---------:|
  | display: none; | X |
  | visibility: hidden; | O |

##### `flex-direction`: flex items 주축을 설정, 수평 또는 수직

- 기본값: `row` (주축 = 수평: 좌 → 우)
- 다른 값 지정: `row-reverse` (주축 = 수평: 우 → 좌)

##### `flex-wrap`: flex items 묶음(줄 바꿈) 여부

- 기본값: `nowrap` (묶음(줄 바꿈) X), 한 줄에 아이템들을 끼워 넣으려 함
- 다른 값 지정: `wrap` (묶음(줄 바꿈) O)

##### `justify-content`: 주축의 정렬 방법

- 기본값: `flex-start` (flex items를 시작점으로 정렬)
- 다른 값 지정: `flex-end` (flex items를 끝점으로 정렬), `center` (flex items를 가운데 정렬)

##### `align-items`: 교차 축의 한 줄 정렬 방법

- 기본값: `stretch` (flex items를 (height 크기 고정 아닌 경우) 교차 축으로 늘림)
- 다른 값 지정: `flex-start` (flex items를 각 줄의 시작점으로 정렬), `flex-end` (flex items를 각 줄의 끝점으로 정렬), `center` (flex items를 각 줄의 가운데 정렬)

#### flex items(자식)에 부여하는 속성

##### `order`: flex item의 순서

- 기본값: `0` (순서 없음)
- 다른 값 지정: `숫자` (작을수록 먼저)

##### `flex-grow`: flex item의 증가 너비 비율

- 기본값: `0` (증가 비율 없음)
- 다른 값 지정: `숫자` (증가 비율)

##### `flex-shrink`: flex item의 감소 너비 비율

- 기본값: `1` (flex container 너비에 따라 감소 비율 적용)
- 다른 값 지정: `숫자` (감소 비율, `0`인 경우 요소 줄어들지 않음)

##### `flex-basis`: flex item의 공간 배분 전 기본 너비

- 기본값: `auto` (요소의 content 너비)
- 다른 값 지정: `px`, `em`, `rem` 등의 단위 사용
- 예) `flex-basis`를 0으로 설정한 후 flex items의 `flex-grow` 비율을 설정하면 요소의 content 너비를 기준으로 분배
