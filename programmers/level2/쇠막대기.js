function solution(arrangement) {
  let answer = []
  let sum = 0
  let result = 0
  let wall = 0
for(let i =0; i< arrangement.length; i++) {
    arrangement.charAt(i) === '(' ? answer[i] = 1 :answer[i] = -1
    sum += answer[i] 
    if(answer[i] === -1 && answer[i] !== answer[i-1]) {
      result += sum
    }else if(answer[i] === -1 && answer[i] === answer[i-1]) {
      result ++      
    }

}
return result
}