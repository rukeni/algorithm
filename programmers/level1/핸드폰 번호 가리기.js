function solution(phone_number) {
  let answer = []
  for (let i=0; i<phone_number.length; i++) {
      if(i <= phone_number.length - 5) {
          answer[i] = '*'
      } else{
          answer[i] = phone_number.charAt(i)
      }
     
  }
  return answer.join('')
}