function solution(strings, n) {
  let answer = strings.sort((a,b) => {
          if(a.charAt(n) > b.charAt(n)) {
              return 1
          } else if(a.charAt(n) < b.charAt(n)) {
              return -1
          }
          if(a > b) {
              return 1
          } else if(a < b) {
              return -1
          }
      return 0
  })
  
  return answer;
}