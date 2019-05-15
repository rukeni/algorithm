function solution(arr) {
  let min = Math.min(...arr)
  arr.splice(arr.indexOf(min), 1)
  return typeof arr[0] === 'undefined' ? [-1] : arr
}