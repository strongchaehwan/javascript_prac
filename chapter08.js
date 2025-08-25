function funcA() {
  console.log("funcA");
}

let varA = funcA;
//console.log(varA);

//함수 표현식
let varB = function () {
  return 1;
};

//화살표 함수
let varC = (value) => {
  return value + 1;
};

console.log(varC(10));
