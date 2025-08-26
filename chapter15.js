// 1. 벼열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;

//console.log(one);

// 2. 객체의 구조 분해 할당
let person = {
  name: "임채환",
  age: 26,
};
let { name, age } = person;
//console.log(name, age);

// 3. 객체 구조 분해할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age }) => {
  console.log(name, age);
};

func(person);
