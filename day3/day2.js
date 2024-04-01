// let 변하는 변수 const 상수
// var 와 같이 쓰기 X
// let i = 0;
// const i = 0;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

console.log(0 == "0");
console.log(0 === "0");
if ("1" === true) console.log("같다x");
for (let i = 0; i < 10; i++) {
  // 타입이 없으니까 가능하긴 한데 좋진 않음
  if (i === "0") console.log(i);
  else if (i === 0) console.log(true);
}
if ("true" == true) console.log("같다");
// 2 ... 100 소수 탐색
let count = 0;
let i;
for (i = 2; i <= 100; i++) {
  count = 0;
  for (let j = 2; j < i / 2; j++) {
    if (i % j == 0) {
      count++;
      break;
    }
  }
  if (count == 0) console.log(i);
}
