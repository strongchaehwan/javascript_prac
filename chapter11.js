// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티(객체 속성) key : value
let person = {
  name: "임채환",
  age: 26,
  hobby: "테니스",
};

console.log(person);

// 3. 객체 프로퍼티를 다루느 방법
// 3.1 특정 프로퍼티에 접근(점표기법,괄호 표기법)
let name = person.name;

let age = person["age"];

// 3.2 새로운 프로퍼티를 추가하는방법
person.job = "back develop";
person["food"] = "치킨";

// 3.3 프로퍼티 수정
person.job = "game";
person["food"] = "pizza";
console.log(person);

//3.4 프로퍼티 삭제
delete person.food;
delete person["job"];
console.log(person);

// 3.5 프로퍼티 존재유무 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
