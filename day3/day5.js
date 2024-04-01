// java script(x) java(type)
// java 어떤 기능을 호출하려면
// method
// js function
// public int sum(int a, int b) {
//      return a+b;
// }
function sum(a, b) {
  return a + b;
}

const sum1 = (a, b = 1) => {
  return a + b;
};

function diff(a, b) {
  return a - b;
}

const diff1 = (a, b) => a - b;

const division = (a, b) => {
  const sum = () => a + b;
  return sum() / b;
};

// sum2(3) : 5 -> diff2(5) : 3 -> sum2(3,10):13 -> diff2(13,4) -> 9

// console.log(diff2(sum2(diff2(sum2(3)), 10), 4));
// console.log(list[0](21), "    ", list[1](10));

const diff2 = (a, b = 2) => a - b;
const sum2 = (a, b = 2) => a + b;
const division2 = (a, b) => a / b;
const multi2 = (a, b) => a * b;
const list = [sum2, diff2, multi2, division2, (a) => a * a];
let total = 0;
for (let i = 0; i < list.length; i++) {
  total += list[i](i, 10);
}
console.log(total);

// 비구조화 할당
const [sum3, diff3, multi3, division3, pow3] = list;
console.log(sum3(1, 2));

// console.log(sum(1, 2), diff(2, 1));

// console.log(sum1(10));
// console.log(diff1(10, 5));
// console.log(division(1, 3));
