function solution(a, b) {
  let answer = a === b ? a : new Array(Math.abs( a - b ) + 1 ).fill(a < b ? a : b).map(( el , i ) => { return el + i }).reduce(( acc , curr ) => { return acc + curr })
  return answer
}