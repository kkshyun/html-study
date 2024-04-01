// class Person {
//   age;
//   name;
//   constructor(age, name) {
//     this.age = age;
//   }
// }
// const person = new Person(1, "32"); // new 들어가면 클래스라는 걸 알 수 있음
// person.age;

const name = "fdsa";
const obj = { name };
console.log(obj);
const observer = new IntersectionObserver((entries, observer) => {
  // 처음에 실행이 되고, 타겟들이 보이면 다시 호출됨
  entries.forEach((entrie) => {
    if (entrie.isIntersecting) {
      entrie.target.className = "box show";
    } else {
      entrie.target.className = "box show2";
    }
  });
});
const target = document.getElementsByClassName("box")[3];
observer.observe(target); // 이 타겟을 감시함
