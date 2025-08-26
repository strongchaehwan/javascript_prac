console.log(1);

//비동기 함수는 web APIs가 실행함
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
