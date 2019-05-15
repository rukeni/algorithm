function solution(arr) {
  let answer = arr.filter((element, index, array) => {
      return element !== array[index+1]
  })
  
  
  return answer
}