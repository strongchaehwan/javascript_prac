let comp1 = 1 === 2;
let comp2 = 1 !== 2;

let var1 = 1;
var1 = "hello";

let t1 = typeof var1;

//삼항연산자
let var2 = 10;

let res = var2 % 2 == 0 ? "짝수" : "홀수";

let animal = "q";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  default: {
    console.log("xx");
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i >= 5) {
    break;
  }
}
