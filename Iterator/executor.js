const A_CHAR_CODE = 65
const Z_CHAR_CODE = 90

// 알파뱃 A부터 반복
function createAlphabetIterator(){
  let currCode = A_CHAR_CODE

  return {
    next(){
      const currChar = String.fromCharCode(currCode)
      if(currCode > Z_CHAR_CODE){
        return {done: true}
      }
      currCode++
      return {value:currChar, done:false}
    }
  }
}

/**
 * 이런 반복자를 사용할 경우, 반복자의 현재 위치를 어떤 방식으로든 추적해야 하기 때문에, 많은 경우 반복자는 상태저장 객체다.
 *
 *
 * 하지만 완전시 상태 비저장일 수도 있음..
 *
 * 예를 들어, 무작위 욧를 반환하고 무작위로 종료하거나 무한 반복을 하는 반복자이거나 등
 */

const iterator = createAlphabetIterator()

let iterationREsult = iterator.next()
while(!iterationREsult.done){
  console.log(iterationREsult.value)
  iterationREsult = iterator.next()
}