# js-MyTodoSite

[1인 프로젝트] what to do today? 의 업그레이드 버전입니다! (투두리스트)

노마드 코더의 크롬 앱 만들기와 그림판 만들기 강의를 수강한 후 두 강의를 조합하여 [What todo today?](https://jeongeum.github.io/What-to-do-Today-/) 라는 솔로 프로젝트를 진행하였습니다.

그 후, 바닐라js 챌린지를 2주간 참여하며 비슷하지만 새로운 디자인으로 졸업 프로젝트를 진행하고자 하였고 챌린지 기간동안 과제로 진행한 d-day 계산기를 추가하여 이번 MyTodoSite 프로젝트를 완성하였습니다.

### 📅 기간

2022.05.20~2022.05.23

### ⚙ 기능

- 사용자 이름 입력 시 localStorage에 저장이 된다.
- 프로필 사진을 추가할 수 있고 새로 고침 시 유지할 수 있다.
- 원하는 d-day 기념일 계산을 할 수 있다.
- 현재 시간과 날짜를 확인할 수 있다.
- 현재 나의 위치 정보를 받아와 날씨를 확인할 수 있다.
- Todo List를 작성하고 삭제할 수 있다.
- 그림판에 그림을 그리고 삭제, 저장할 수 있다.
- 새로고침 시 배경화면과 명언을 랜덤으로 확인할 수 있다.
- 로그아웃을 할 수 있다.

### ✨ 결과물

1. 정보 입력 ⌨

- 사용자 이름을 입력하고 프로필 사진 설정, d-day/todolist 작성 및 삭제

![졸작_인트로](https://user-images.githubusercontent.com/77143425/169758007-7988f2b1-bdb8-4bf9-98e2-fb5c7f88e68b.gif)

2. 정보 변경 🔄

- d-day , 사용자 이름 , 프로필 사진 변경

![졸작_디데이이름사진변경](https://user-images.githubusercontent.com/77143425/169758191-27182e21-8368-4f38-8500-c5db96c568ad.gif)

3. 그림판 🎨

- 우측 메뉴에서 붓 아이콘 클릭 시 todolist가 그림판으로 변경
- 펜의 굵기 조절 가능 , 캔버스 전체 색칠 가능 , 저장 가능
- 랜덤 색상 선택 가능
- 팔레트에서 색상 선택 시 우측 메뉴의 붓 아이콘이 현재 선택한 색상으로 변경

![졸작_그림판](https://user-images.githubusercontent.com/77143425/169758198-9088db69-1447-46a9-bc58-dbd9f5cb5263.gif)

![졸작_그림판2](https://user-images.githubusercontent.com/77143425/169760211-05f0a89f-3b24-470d-aaca-b3990d0c67f4.gif)

4. 랜덤 배경화면 / 명언 📜

- 새로 고침 시 배경화면과 하단의 명언이 랜덤으로 표시된다.

![졸작_랜덤이미지명언](https://user-images.githubusercontent.com/77143425/169758180-710ef844-4d5d-45a7-aba4-55ad3c0aff0f.gif)

### 배운 점 / 아쉬운 점

- what to do today 프로젝트 진행 시 해내지 못했던 이슈 사항을 이번 프로젝트에서 해결하였다.
  - <b>_이슈사항_</b>
    : 프로필 사진 설정 후 새로고침을 하면 프로필 사진이 기본 이미지로 돌아옴. 그러나 localStorage 에는 제대로 저장되어있음.
- d-day 설정 후 새로고침을 한 번 해줘야 hour/minute/second 가 작동한다.
- 우측 메뉴바에서 북마크 아이콘 hover 시 메뉴가 아래로 애니메이션 적용되도록 하고 싶었는데 못했다. css 공부가 필요한 것 같다.
- js 파일과 css 사용을 위한 id/class 네이밍 , 변수 네이밍 실력이 부족했다.

### 참고

💻 [그림판 사이트](https://jeongeum.github.io/js-MyTodoSite/)
