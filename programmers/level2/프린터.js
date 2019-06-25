function solution(priorities, location) {
  let answer = 0
  let queue = priorities.map((element, index) => {
      return [element, index === location]
  })

 while(true) {
     let current = queue.splice(0,1)[0]
     if(queue.some(t=> t[0] > current[0])) {
         queue.push(current)
     } else {
         answer++
         if(current[1]) {
             return answer
         }
     }
 }
}