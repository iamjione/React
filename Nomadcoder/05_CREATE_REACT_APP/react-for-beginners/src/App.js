import Button from "./Button";
import styles from "./App.module.css";
//파일명.module.css와 같은 파일에 css스타일 적용후 import해서 쓰면
//App_title__zcdgJ와 같이 랜덤한 클래스명 만들어줌 (f12 >> Elements 에서 확인 가능)
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welecome back!</h1>
      <Button text={"Click"} />
    </div>
  );
}

export default App;
