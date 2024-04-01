// 리스트를 만들고 1... 10까지 넣어라

const list = [];
for (let i = 1; i <= 10; i++) {
  list.push(i);
}
console.log(list);

list["4"] = 10;
console.log(list);

// object
const obj = { age: 10, print: () => console.log(obj["age"]) };
obj["name"] = "park";
// Map <String, Integer> map = new HashMap<>();
console.log(obj);
obj["print"](); // 10
for (let i = 0; i <= 10; i++) {
  obj[i - 1] = i;
}
obj["print"]; // () 안 붙이면 함수, 아무것도 출력 안 됨
console.log(obj["print"]); // [Function: print]

const classRoom = {
  students: [
    { name: "김부자", age: 22 },
    { name: "조진호", age: 32 },
  ],
  manager: [{ name: "송희", age: 30 }],
}; // json

console.log(classRoom["students"][1]["name"]); // 조진호
// 객체 안에 있는 걸 꺼낼 때에는 . 으로
console.log(classRoom.students[1].name); // 조진호

classRoom["list"] = list;
console.log(classRoom.list);
list[0] = 100;
console.log(classRoom.list);
