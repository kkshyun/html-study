import { useState } from "react";
import Person from "./Person";

const People = () => {
  const [age, setAge] = useState(12);
  return (
    <>
      <input onChange={(e) => setAge(e.target.value)}></input>
      <Person age={age} />
      <Person age={age} />
    </>
  );
};
export default People;
