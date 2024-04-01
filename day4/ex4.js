// alert("1234");
// const is = confirm("밥 먹었니?"); // 리턴 값이 있음
// console.log(is);

// setTimeout(() => {
//   alert("hello");
// }, 2000);

// const interval = setInterval(() => {
//   alert("hello");
// }, 2000);

// setTimeout(() => clearInterval(interval), 5000);

// 1초마다 alert("hello") 이거 실행할거고
// 3초마다 confirm("end?") yes 면 모든 것을 종료 시킬거다

// const interval = setInterval(() => {
//   alert("hello");
// }, 1000);

// const answerInterval = setInterval(() => {
//   if (confirm("end?")) {
//     clearInterval(interval);
//     clearInterval(answerInterval);
//   }
// }, 3000);

const txt = document.getElementById("txt");
// setTimeout(() => {
//   txt.innerHTML = "hello";
// }, 2000);
let i = 1;
setInterval(() => {
  txt.innerHTML = `count :   ${i++}`;
}, 1000);
