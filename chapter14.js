// 1. Falsy 한값 조건문에서 false 거짓으로 평가됌
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

// 2. Truthy 한값 true로 평가됌 조건문에서
// Falsy 7가지 한값들을 제외한 나머지 모든값

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = {
  name: "임채환",
};

printName(person);
