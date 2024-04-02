import { useState } from "react";
import ViewCount from "../components/ViewCount";
import ChangeCount from "../components/ChangeCount";
import LogCount from "../components/LogCount";
import { useRecoilState } from "recoil";
import { countState } from "../store/countState";

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  //   const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);
  console.log("Counter");

  return (
    <div className="container">
      {/* count 보여주는 곳 */}
      <ViewCount count={count} />
      {/* count 바꾸는 곳 */}
      <ChangeCount />
      <hr className="m-4" />
      <LogCount />
    </div>
  );
};

export default Counter;
