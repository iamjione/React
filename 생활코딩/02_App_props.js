import logo from './logo.svg';
import './App.css';

function Header(props){
  return <header>
    <h1><a href='/'>{props.title}</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    //자동으로 생성한 태그일 때 리액트가 태그를 추적해야하는데
    //그때 태그를 추적할 근거로써 고유한 key값이 있어야함
    //(애플리케이션 전체에서 고유할 필요는 없고 그냥 반복문 내에서만 고유하면 됨)
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return<nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function App() {
  const topics = [
    {id:1, title:"html", body:"html is..."},
    {id:2, title:"css", body:"css is..."},
    {id:3, title:"javascript", body:"javascript is..."}
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics = {topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
