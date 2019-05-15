function solution(arr, divisor) {
  let answer = arr.filter(( element, index, array ) => {
      return element % divisor === 0
  }).sort(( a , b ) => { return a - b })
  return !answer.length? [-1] : answer
}