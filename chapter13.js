// 1. 배열생성
let arrA = new Array();
let arrB = []; //리터럴(대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrC);

// 배열접근
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1, item2);

arrC[0] = "qq";
console.log(arrC);
