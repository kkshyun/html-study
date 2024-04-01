// list(list, arr), object
// int[] arr = new int[123];
// List<Integer> list = new ArrayList<>();

// const list = [];
// // arr[0] = 1;
// // list.add(1);
// for (let i = 1; i <= 10; i++) list.push(i);
// console.log(list);
// console.log(list[2]);
// console.log(list.length);

// // 3 6 9 (10까지)
// const list369 = [];
// for (let i = 1; i <= 10; i++) {
//   if (i % 3 == 0) list369.push("짝");
//   else list369.push(i);
// }
// console.log(list369);

// // 3 6 9 (40까지)
// const list36940 = [];
// for (let i = 1; i <= 40; i++) {
//   if (i % 10 != 0 && (i % 10) % 3 == 0) list36940.push("짝");
//   else list36940.push(i);
// }
// console.log(list36940);

// const list369t = [];
// for (let index = 1; index <= 50; index++) {
//   let num = index;
//   if ((index + "").includes("3")) num = "짝";
//   if ((index + "").includes("6")) num = "짝";
//   if ((index + "").includes("9")) num = "짝";
//   list369t.push(num);
// }
// console.log(list369t);

// const list369t = [];
// for (let index = 1; index <= 50; index++) {
//   (index + "").includes("3")
//     ? (num = "짝")
//     : (index + "").includes("6")
//     ? (num = "짝")
//     : (index + "").includes("9")
//     ? (num = "짝")
//     : (num = index);
//   list369t.push(num);
// }
// console.log(list369t);

// const list369t = [];
// for (let index = 1; index <= 50; index++) {
//   (index + "").includes("3") ||
//   (index + "").includes("6") ||
//   (index + "").includes("9")
//     ? (num = "짝")
//     : (num = index);
//   list369t.push(num);
// }
// console.log(list369t);

const list = []; // 100 ... 1000
const list369 = []; // 369 리스트 만들거다

for (let i = 100; i <= 1000; i++) {
  list.push(i);
}

for (let j = 0; j < list.length; j++) {
  let num = list[j];
  (num + "").includes("3") ||
  (num + "").includes("6") ||
  (num + "").includes("9")
    ? list369.push("짝")
    : list369.push(num);
}
console.log(list369);
