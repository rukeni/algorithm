function solution( array , commands ) {
  let answer = [];
  let arraySort = ( array ) => {
      array.sort(( a , b ) => {
          return a - b
      })
  }
  
  let kNumber = (i, j, k) => {
      let newArray = array.slice( i-1 , j )
      arraySort( newArray )
      return newArray[ k-1 ]
  }
  
  for ( let i = 0; i < commands.length; i++ ) {
      answer.push( kNumber( commands[i][0], commands[i][1], commands[i][2] ))
  }
  
  return answer;
}