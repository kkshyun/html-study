import { useState } from "react";
import Box from "./Box";

const Boxs = () => {
  const [width, setWidth] = useState("500px");
  const [height, setHeight] = useState("500px");
  return (
    <>
      <input type="number" onChange={(e) => setWidth(e.target.value + "px")} />
      <input type="number" onChange={(e) => setHeight(e.target.value + "px")} />
      <Box width={width} height={height} />
      <Box width={width} height={height} />
    </>
  );
};
export default Boxs;
