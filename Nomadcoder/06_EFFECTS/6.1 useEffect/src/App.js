import { useState, useEffect } from "react";
//useEffect(): 최초 한번만 rendering이 되고 그 이후로는 rendering이 안되게 하는 함수
//API를 호출할 때 유용! 매번 새로 불러오는 대신 최조 한번만 불러옴
function App() {
  const [counter, setValue] = useState(0); //counter 초기값 0으로 설정
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  // const IRunOnlyOnce = () => {
  //   console.log("I run only once");
  // };
  // useEffect(IRunOnlyOnce, []);

  //최초 한번만 실행됨
  useEffect(() => {
    console.log("I run only once");
  }, []);

  //Keyword가 변할 때 마다 실행됨
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  //counter가 변할 때 마다 실행됨
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
