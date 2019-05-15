function solution(a, b) {
  let answer = '';
  let week = {
      SUN : 'SUN',
      MON : 'MON',
      TUE : 'TUE',
      WED : 'WED',
      THU : 'THU',
      FRI : 'FRI',
      SAT : 'SAT'
  };
  
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // a-1월 까지 month를 모두 더한후 b일을 더한다
  // sum % 7 === 요일을 정한다.
  
  let sum = 0;
  
  let result = ((a,b) => {
      if( a !== 1) {
        for(let i=0; i<a-1; i++) {
          sum += month[i]
        }
      } 
      sum += b
      if(sum % 7 === 0) {
        return answer = week.THU
      } else if(sum % 7 == 1) {
        return answer = week.FRI
      } else if(sum % 7 == 2) {
        return answer = week.SAT
      } else if(sum % 7 == 3) {
        return answer = week.SUN
      } else if(sum % 7 == 4) {
        return answer = week.MON
      } else if(sum % 7 == 5) {
        return answer = week.TUE
      } else if(sum % 7 == 6) {
        return answer = week.WED
      }
  })
  
  result(a,b)
  
  return answer
}