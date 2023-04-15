import "./App.css";
import { useState } from "react";

//컴포넌트 : 사용자 정의 태그
// - 함수를 정의해서 사용
// - 리액트에서 컴포넌트를 만들때는 반드시 대문자로 시작
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); //클릭해도 reload가 안되게 함
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    //자동으로 생성한 태그일 때 리액트가 태그를 추적해야하는데
    //그때 태그를 추적할 근거로써 고유한 key값이 있어야함
    //(애플리케이션 전체에서 고유할 필요는 없고 그냥 반복문 내에서만 고유하면 됨)
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            //이벤트 객체가 갖고있는 타겟(=이벤트를 유발시킨 태그)이 갖고있는 id값
            //이 경우에는 a태그가 타켓
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  // useState배열의 0번째 원소는 상태의 값을 읽을 때 쓰는 데이터,
  // 1번째 원소는 상태의 값을 변경할때 쓰는 함수
  // const _mode = useState("WELCOME");//"WELCOME"은 초기값
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // 위의 3줄을 아래와 같이 한줄로 쓸 수 있음! 아래처럼 쓰기
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javasctipt", body: "javascript is ..." },
  ];
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      {/* 일반 함수 : onChangeMode={function(){
        alert('Header');
      }} */}
      {/* 화살표 함수 : onChangeMode={()=>{
        alert('Header');
      }}*/}
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
