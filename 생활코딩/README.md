# React
🔗[생활코딩 React 강의](https://youtube.com/playlist?list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7)

### Visual Studio Code로 React 시작하기  
step1.  node.js 설치

step2. 새로운 폴더 만들어서 열기  
           폴더명 react로 하면 오동작할 수 있으니까 react라는 이름은 피하자! 

step3. terminal ➡️ new terminal 에서 명령어로 visual studio 제어  
           npx create-react-app . //.은 현재 디렉토리를 의미    
           설치하라고 나오면 Y 눌러서 설치하기    
           npm start // 리액트 개발 환경 실행
<br>
<br>
### 배포하는 법
terminal에서 명령어 입력

step1.  ctrl+c // 기존에 켜져있었던 개발환경 끄기

step2.  npm run build // build 폴더 안에 index.html 파일 생성됨

step3.  npx serve -s build // 접속할 수 있는 주소 나옴
<br>
<br>
## Component 컴포넌트
\- 사용자 정의 태그

\- 컴포넌트 이름은 반드시 대문자로 시작해야함

\- 함수 컴포넌트 / class 컴포넌트 가 있음

\- 컴포넌트를 사용하면 여러 태그를 독립된 하나의 부품으로 만듦으로써 가독성이 좋아지고 컴포넌트의 공유가 가능해짐  
   (코드의 복잡도 ↓ & 생산성 ↑)
   
<br>📍컴포넌트 사용 전
<p>
  <img src="https://user-images.githubusercontent.com/124686390/231524308-bd169436-0f34-49d0-9657-f26473baecba.png" height="400"/>&nbsp
  <img src="https://user-images.githubusercontent.com/124686390/231524761-e84dbc55-39ca-471a-b4d2-0bc866804b7b.png" height="400"/>
</p>
<br>📍컴포넌트 사용 후
<img src="https://user-images.githubusercontent.com/124686390/231527841-82c59f32-fd66-4e3d-95d8-e7951f21087c.png" width="500"/>

<br>
<br>
## Props   

\- props는 properties(속성)의 줄임말로 어떤 값을 컴포넌트에게 전달해줄 때 사용

\- props의 자료형은 object

\- props의 값을 출력하기 위해서는 중괄호{}를 사용해야함  
  (중괄호를 쓰지 않으면 표현식이 아닌 그냥 문자열로 인식)
