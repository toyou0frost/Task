// 단일 객체 내보내기
function sum(a:number, b:number) {
  return a + b;
}

function sub(a:number, b:number) {
  return a - b;
}

function multiply(a:number, b:number) {
  return a * b;
}

function divide(a:number, b:number) {
  if (b === 0) throw new Error("0으로 숫자를 나눌 수 없습니다.");
  return a / b;
}


export default {
  sum,
  sub,
  multiply,
  divide
}
