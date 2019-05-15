function solution(n) {
  let answer = `${n}`.split('').map((el) => {
      return parseInt(el)
  }).reverse()
  return answer
}