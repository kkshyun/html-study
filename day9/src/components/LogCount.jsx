import { useState } from "react";
import { useRecoilValue } from "recoil";
import { countLogState } from "../store/countState";

// logs [{number : 1, date : time}]
const defaultLogs = [
  { number: 1, date: new Date().toLocaleString() },
  { number: 1, date: new Date().toLocaleString() },
  { number: 1, date: new Date().toLocaleString() },
];

const LogCount = () => {
  const logs = useRecoilValue(countLogState);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>number</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(({ number, date }, i) => (
            // 반복문이 돌아갈 때는 키를 주는 게 좋음
            <tr key={i}>
              <td>{number}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default LogCount;
