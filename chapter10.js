// 스코프
// 전역스코프,지역스코프
// 전역 - > 전체 영역에서 접근가능
// 지역 -> 특정 영역에서만 접근가능

let a = 1; //전역

function funcA() {
  let b = 2; //지역스코프
  console.log(a);
}

funcA();
