import { useState } from "react";

// 컴포넌트의 파라미터 : props
const Box = ({ width, height }) => {
  const [color, setColor] = useState("black");
  console.log("Box");
  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: color,
        }}
      ></div>
    </>
  );
};

export default Box;
