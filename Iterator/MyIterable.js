class MyIterable{
  [Symbol.iterator](){
    // 반복자를 반환한다.

  }
}

/**
 * 자바스크립트의 내장 심볼인 Symbol.iterator 함수를 통해ㅑ 접근 간읗나 함수를 구현하여 반복 가능자를 정의한다.
 */

export class Matrix{
  // 이차원 배열을 파라미터로 넣을 것이다.
  constructor(inMatrix) {
    this.data = inMatrix
  }

  get(row, column){
    if(row >= this.data.length || column >= this.data[row].length){
      throw new RangeError('Out of bounds')
    }
    return this.data[row][column]
  }
  set(row, column, value){
    if(row >= this.data.length || column >= this.data[row].length){
      throw new RangeError('Out of bounds')
    }
    this.data[row][column] = value
  }

  [Symbol.iterator](){
    let nextRow = 0
    let nextCol = 0

    return {
      next: () => {
        // 배열의 마지막 로우
        if(nextRow === this.data.length){
          return {done: true}
        }

        // 배열의 항목에 0,0 부터 접근한다.
        const currval = this.data[nextRow][nextCol]

        // 마지막 컬럼이면, 다음 로우의 첫 컬럼으로 세팅
        if(nextCol === this.data[nextRow].length -1){
          nextRow ++
          nextCol = 0
        }else{
          nextCol ++
        }

        return {value : currval}
      }
    }
  }
}