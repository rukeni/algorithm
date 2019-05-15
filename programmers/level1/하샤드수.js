function solution(x) {
  let string = String(x)
  let answer = 0
  for(let i =0; i< string.length; i++) {
      answer += parseInt(string.charAt(i))
  }
  
  return x % answer === 0 ? true : false
}