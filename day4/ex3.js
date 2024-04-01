const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];
// map : 기존 리스트를 가지고 새로운 리스트를 만들 때
const isAdultList = students.map((el, i, arr) => {
  return { ...el, isAdult: el.age > 19 };
});
console.log(isAdultList);
// const ageup = students.map((el) => {
//   return { ...el, age: el.age + 1 };
// });
// const ageup = students.map((el) => ({ ...el, age: el.age + 1 }));
const ageUpFunc = (el) => ({ ...el, age: el.age + 1 });
const ageup = students.map(ageUpFunc); // 남이 실행해주는 함수  콜백함수
console.log(ageup);

const adultList = students.filter((el, index, arr) => {
  return el.age > 19; // true 인 것만 뽑아내는거임
});
console.log(adultList);

const kimList = students.filter((el) => {
  return el.name.charAt(0) == "김";
});
console.log(kimList);
// console.log(kimList[-1]); // undefined
// console.log(kimList[0].aaaa); // undefined

// sort
// const ageAsc = students.sort((a, b) => a.age - b.age); // 오름차순
// console.log(ageAsc);
const ageAsc = students.sort((a, b) => b.age - a.age); // 내림차순
console.log(ageAsc);
