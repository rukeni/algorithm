function solution(num) {
  let answer = 0
  
  while(num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1
      answer ++
  }
  
  return answer >= 500 ? -1 : answer
}