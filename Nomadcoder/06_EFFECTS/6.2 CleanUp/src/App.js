import { useState, useEffect } from "react";

//CleanUp function : run when the component destroyed

function Hello() {
  //방법 1
  // function effectFn() {
  //   console.log("created :)");
  //   return destroyedFn; //CleanUp 함수
  // }
  // function destroyedFn() {
  //   console.log("destroyed :(");
  // }
  // useEffect(effectFn, []);
  // return <h1>Hello</h1>;

  //방법 2
  // useEffect(function () {
  //   console.log("created :)");
  //   return function () {
  //     console.log("destroyed :(");
  //   };
  // }, []);
  // return <h1>Hello</h1>;

  //⭐⭐방법 3⭐⭐ 가장 간단!
  useEffect(() => {
    console.log("created :)"); //Show버튼 눌러서 Hello component 생성될때만 실행됨
    return () => console.log("destroyed :("); //CleanUp 함수
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
