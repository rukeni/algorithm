function solution(n) {
  var answer = Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : -1
  return answer;
}