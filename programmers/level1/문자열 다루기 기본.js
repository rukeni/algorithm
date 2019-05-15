function solution(s) {
  let answer = true
  let regexr = /^\d+$/
  let length = s.length
  if( (length === 4 || length === 6) && regexr.test(s) ) {
      return answer = true
  } else {
      return answer = false
  }
  
  return answer
}