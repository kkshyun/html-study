const list = [1, 4, 5, 21, 42, 1, 3, 57, 9, 5231];
// 짝수인지 아닌지 하나하나 계산해서 리스트로 만들어 보여주기
// const isEvenList = [];
// for (let i = 0; i < list.length; i++) {
//   if (list[i] % 2 == 0) isEvenList.push("true");
//   else isEvenList.push("false");
// }
// console.log(isEvenList);

// map 은 기준 리스트를 가지고 새로운 값이 다른 리스트를 만드는 것

// const isEvenList = list.map((element, index, arr) => {
//   console.log(element, index, arr);
//   return element % 2 === 0;
// });

// console.log(isEvenList);
const isEvenList = list.map((element) => {
  return element % 2 === 0;
});

console.log(isEvenList);
