function solution(s) {
    
  let answer = ''
  
  let result = ( string ) => {
      if( string.length % 2 === 1) {
          return answer = string.substr( ( string.length / 2 ) , 1 )
      } else if( string.length % 2 === 0 ) {
          return answer = string.substr( ( string.length / 2 - 1 ) , 2 )
      }
  }
  result(s)
  
  return answer
}