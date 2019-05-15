function solution(n)
{
    let answer = new String(n)
    let strings = []
    for(let i = 0 ; i< answer.length; i++ ) {
        strings[i] = parseInt(answer.charAt(i))
    }
    let result = strings.reduce((acc, curr) => {
        return acc += curr
    })

    return result
}