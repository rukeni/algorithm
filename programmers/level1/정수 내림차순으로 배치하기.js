function solution(n) {
  let answer = String(n).split('').sort().reverse().join('')
  return parseInt(answer)
}