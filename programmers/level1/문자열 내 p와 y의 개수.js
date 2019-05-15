function solution(s){

  let a = s.toLowerCase()
  
  let pCount = 0
  let yCount = 0
  for( let i=0, length = s.length; i < length; i++ ){
      if( a[i] === 'p') {
          pCount++
      } else if ( a[i] === 'y') {
          yCount++
      }
      
  }
  return pCount === yCount ? true : false
}