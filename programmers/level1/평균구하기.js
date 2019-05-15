function solution(arr) {
  let result = arr.reduce((acc, curr) => {
      return acc = acc+curr
  })
  
  return result / arr.length
}