// 1. 콜백함수
function main(value) {
  value();
}

// function sub() {
//   console.log("i am sub");
// }

//main(sub);
main(() => {
  //console.log("i am sub");
});

// 2. 콜백함수 활용
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, (i) => {
  console.log(i);
});

repeat(5, (i) => {
  console.log(i * 2);
});

repeat(5, (i) => {
  console.log(i * 3);
});
