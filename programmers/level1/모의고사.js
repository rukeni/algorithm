function solution(answers) {
  let answer = []
  
  let order = ( array ) => array.sort(( a , b ) => {
    return a - b
  })

  let max = ( array ) => array.reduce(( prev , curr ) => {
      return prev > curr ? prev: curr
  })
  
  let person1 = Array( answers.length ).fill( 0 ).map( ( el , i ) => el + ( i % 5 + 1 ) )
  
  let person2 = Array( answers.length ).fill( 2 )
    for ( let i = 0; i< person2.length; i++ ) {
      
      if(i % 8 === 1) {
          person2[i] = 1
        
     }  else if(i % 8 === 3) {
          person2[i] = 3
       
     }  else if(i % 8 === 5) {
          person2[i] = 4
       
     }  else if(i % 8 === 7) {
          person2[i] = 5
     }
   }
    
 let person3 = Array( answers.length )
   for ( let j = 0; j< person3.length; j++ ) {
    if( j % 10 === 0 || j % 10 === 1 ) {
        person3[j] = 3
    } else if( j % 10 === 2 || j % 10 === 3 ) {
        person3[j] = 1
    } else if( j % 10 === 4 || j % 10 === 5 ) {
        person3[j] = 2
    } else if( j % 10 === 6 || j % 10 === 7 ) {
        person3[j] = 4
    } else if( j % 10 === 8 || j % 10 === 9 ) {
        person3[j] = 5
    }
  }
    
  let personAnswer = ( array ) => array.filter(( value , index ) => {
      return value === answers[ index ]
  }).length

  let lengthArray = []
    lengthArray.push( personAnswer( person1 ))
    lengthArray.push (personAnswer( person2 ))
    lengthArray.push( personAnswer( person3 ))



  if ( max( lengthArray ) === lengthArray[ 0 ]) {
      answer.push( 1 )
  } 
  if( max( lengthArray ) === lengthArray[ 1 ]) {
      answer.push( 2 )
  } 
  if ( max( lengthArray ) === lengthArray[ 2 ]) {
      answer.push( 3 )
  }
      order( answer )
    
    return answer;
}