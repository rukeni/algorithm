function solution(n) {
  let answer = n !== 0 ? new Array(n).fill(1).map((el, i) => {return el + i}).filter((el,i) => {return n % el === 0}).reduce((acc,curr) => {return acc = acc+ curr}) : 0
  return answer
}