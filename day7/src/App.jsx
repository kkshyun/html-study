import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Box from "./components/Box"; // 꺼내와서 변수로 사용
import Person from "./components/Person";
import Boxs from "./components/Boxs";
import People from "./components/People";
import Counter from "./components/Counter";
// html 태그를 리턴하는 파일을 jsx 라고 함
function App() {
  return (
    <div className="App">
      <Counter />
      <People />
      <Boxs />
    </div>
  );
}

export default App;
