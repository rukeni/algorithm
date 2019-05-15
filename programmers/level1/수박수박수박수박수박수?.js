function solution(n) {
  let answer = '수박'
  let result = answer.repeat((n+1) / 2)
  return n % 2 === 0 ? result : result.substr(0, result.length-1)
}