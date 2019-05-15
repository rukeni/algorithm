function solution(s, n) {
  let strings = []
  const character = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const character2 = character.map(el => el.toUpperCase())
  
  for( let i =0; i< s.length; i++) {
      strings[i] = s.charAt(i)
      if(character.includes(strings[i])) {
          let index = character.indexOf(strings[i])
          strings[i] = character[(index + n) % 26]
      } else if(character2.includes(strings[i])) {
          let index = character2.indexOf(strings[i])
          strings[i] = character2[(index + n) % 26]
      }
  }
  const answer = strings.join('')
  return answer
}