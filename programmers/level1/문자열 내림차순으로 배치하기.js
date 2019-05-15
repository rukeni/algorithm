function solution(s) {
  let answer = new Array(s.length).fill('a')
  answer.map( ( el , i , arr ) => {
      return arr[i] = s[i]
  })
  answer.sort()
  answer.reverse()
  let result = answer.reduce((acc,curr) => {
      return acc = acc + curr
  })
  return result
}