function solution(s) {
  let index = 0
  let answer = []
  for(let i = 0 ; i < s.length ; i++ ) {
      answer[i] = s.charAt(i)
      let tempUp = answer[i].toUpperCase()
      let tempLow = answer[i].toLowerCase()
      answer[i] = index % 2 === 0 ? tempUp : tempLow
      answer[i] === ' ' ? index = 0 : index++
}

  return answer.join('');
}