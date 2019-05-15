function solution(n, lost, reserve) {

  let filterReserve = reserve.filter(element => lost.indexOf(element) === -1)
  let filterLost = lost.filter( element => reserve.indexOf(element) === -1)

  filterReserve.forEach( item => {
      let flag = 
          filterLost.indexOf(item - 1) !== -1 ? 
          filterLost.indexOf(item - 1) : filterLost.indexOf(item + 1) !==  -1 ? 
          filterLost.indexOf(item + 1) : false
      if(flag !== false) {
          filterLost.splice( flag , 1 )
      }
  })
  
  return n - filterLost.length
}