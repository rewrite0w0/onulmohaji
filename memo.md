# 메모

- [x] 재기동시 렌더링

1. [x] 선택했을 때 id 받기
<!-- 1. [ ] 아니면 아예 재구축하기 -->

그런데 전자로 해결하고 싶음

눌렀을 때 해야할 반응

- [x] 삭제
  > 추후에 디자인 해야함
- [ ] 수정
  > AsyncStorage.mergeItem로 해결할 것
  <!-- - [ ] 체크박스 필요? -->
- [x] done 기능
  > 추후에 디자인 해야함
- [x] 코드 나누기 지금은 onSubmit에 모두 의존하는데 이와 별개로 구분짓고 싶음

- [ ] RenderFlatList todos를 콘솔로 찍어보니 계속 갱신되는데, 뭔가 이벤트를 줬을 때만 변경되도록 하고 싶음
  > setState 문제같음
- 혹시 useState 대신에 다른 방법으로 렌더링 할 수 있으면 그것으로 할 것
- 만약 성능상 문제가 없으면 나중에 할 것

- [ ] 상세한 디자인은 마지막에 할 것

- [ ] 빌드해서 배포까지 마무리 지을 것

## 2022-03-04

- [x] 수정기능
- [ ] setState 무한정 나오는 것
- [ ] 스와이프로 삭제시키고 싶은데...
- [x] 정렬기능
- [ ] 디자인
- [ ] 모달 상태에서 다른 화면 누르면 모달 숨기기
- [ ] 글자수 x 이상이면 자세히보기 설정
- [ ] or 글자수 제한
- [x] 빈 문자열 받지말기? `""`만 안 받기로
- [ ] done 기능에 따른 디자인 완성되면 일단 빌드
- [ ] `react-native-gesture-handler` 이용해서 버튼 3가지 구현?
      vs
- [ ] 체크박스

## 2022-03-08 13:30

- [ ] 삭제버튼 어떻게 추가할지에 대한 고민
  > 최대한 다른 패키지 설치를 안 하고 react-native 본연의 기능으로 처리하고 싶은데...
- [ ] 모달창 나왔을 때, 다른 곳을 누르면 편집이 취소되는 기능
- [ ] FlatList에서 무한 렌더링하는거... 메모이제이션 적용하는 방법 찾기
- [x] 전체 삭제 기능
- [ ] dark mode? 넣는다면 footer에

## 2022-03-09 09:40

- 삭제 버튼은 모달 수정 창에 넣었음
  > 하지만 직관적이지 않다 느껴짐
- 모달창에서 다른 부분 누르면 모달창이 꺼지는 것을 결국 찾지 못했음.
- 글자수 x 초과 시 화면에 보이는 방식 바꾸기
  > 필요한가 어떤가 모르겠음
