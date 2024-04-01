// 변수 선언 const
// let 은 다시 선언을 할 수 있음
let text = "hi";
text = 1;

// function sum(a, b) {
//   return a + b;
// }

const sum1 = (a, b) => {
  return a + b;
};
console.log(sum1("hi", 2)); // + : hi2 / - : NaN
const print = (i) => {
  console.log("print");
  return i == 2;
};
if (sum1(2, 3) == 5 && sum1(4, 1) > 5) {
}
const ppp = print(2) && 7;
console.log(ppp); // 7
const ppp2 = print(1) || 7;
console.log(ppp2); // 7

const arr = [1, 2, 3, 4, 5];

arr.sort; // sort
arr.map; // 원본은 가공
arr.filter; // 거를 때

const obj = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () =>
    `${obj.name} ${obj.age} ${obj.gender === 1 ? "남자" : "여자"}`,
};
console.log(obj.toString());

console.log(obj.address); // undefined
console.log(obj.address?.city); // undefined
// console.log(obj.address ? obj.address.city : obj.address);
// console.log(obj.address && obj.address.city);
// console.log(obj.address.city); // Cannot read properties of undefined (reading 'city')

const arr2 = ["김부자", "김세현", "김재민"];
const [pl, p2, p3] = arr2;

const obj2 = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () =>
    `${obj.name} ${obj.age} ${obj.gender === 1 ? "남자" : "여자"}`,
};

const { name, age, gender } = obj2; // 키를 가지고 변수로 빼올 수 있음
console.log("hi", age);

const makePerson = (name, age) => {
  return { name: name, age: age };
};
console.log(makePerson("이수진", 20)); // { name: '이수진', age: 20 }
const isAdult = ({ name, age, ...rest }) => {
  return { name: obj.name, age: obj.age, isAdult: age > 20, ...rest };
};
const 이수진 = makePerson("이수진", 20);
console.log(isAdult(obj2));
