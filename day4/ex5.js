const onClickHandler = () => alert("버튼!");
const interval = setInterval(() => {
  console.log("interval");
}, 1000);
const onClickStopInterval = () => {
  clearInterval(interval);
};

//  "hide"라는 id를 가진 요소를 찾고, 해당 요소가 존재하면 제거하고
// 존재하지 않으면 body 요소에 새로운 <p> 요소를 추가하는 기능
const onClickRemove = () => {
  const re = document.getElementById("hide");
  // null, undefined, NaN, 0   : false 처리가 됨
  if (re) return re.remove();
  const body = document.getElementsByTagName("body");
  const p = document.createElement("p");
  // p.setAttribute("id", "hide");
  p.id = "hide";
  p.innerHTML = "showwwwwww!";
  body[0].append(p);
};
