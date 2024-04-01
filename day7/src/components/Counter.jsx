import { useState } from "react";

const Counter = () => {
  let count = 0;
  const [num, setNum] = useState(0);
  const [i, setI] = useState(0);
  const [logs, setLogs] = useState([]);
  const onClickDiv = () => {
    setI(i / num);
    setLogs([...logs, `${i} / ${num}`]);
  };
  const onClickAdd = () => {
    setI(i + num); // set은 이 함수가 끝날 때 상태를 변경해줌
    setLogs([...logs, `${i} + ${num}`]); // 리스트 넣을 때는 이렇게 넣는다ㅏ 외우면 됨
  };
  const onClickSub = () => {
    setI(i - num);
    setLogs([...logs, `${i} - ${num}`]);
  };
  const onClickMul = () => {
    setI(i * num);
    setLogs([...logs, `${i} * ${num}`]);
  };
  return (
    <div>
      <h1>{i}</h1>
      <input
        type="number"
        onChange={(e) => setNum(Number(e.target.value))}
        value={num}
      ></input>
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickSub}>-</button>
      <button onClick={onClickMul}>x</button>
      {num != 0 && <button onClick={onClickDiv}>/</button>}
      {/* map 을 사용해서 출력함 */}
      {/* 고유한 키를 넣어줘야 함 */}
      {logs.map((str, i) => (
        <p key={i}>{str}</p>
      ))}
      <br />
      <button onClick={(e) => setI(i + 1)}>up</button>
      <button onClick={(e) => console.log(i)}>check</button>
    </div>
  );
};
export default Counter;
