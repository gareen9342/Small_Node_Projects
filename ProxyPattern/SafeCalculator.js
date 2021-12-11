class SafeCalculator {
    constructor(calculator) {
        this.calculator = calculator
    }

    //javascript는 0으로 나눌 때에 Inifinity값이 생김
    // 이 값이 생기지 않게 하기 위해 추가적인 검증 로직을 둔다
    divide(){
        const divisor = this.calculator.peekValue()
        if(divisor === 0){
            throw Error(`Division by 0`)
        }
        return this.calculator.divide()
    }

    putValue(value){
        // 위임된 함수들
        return this.calculator.putValue(value)
    }

    getValue(){
        return this.calculator.getValue()
    }

    peekValue(){
        return this.calculator.peekValue()
    }

    clear(){
        return this.calculator.clear()
    }

    multiply(){
        return this.calculator.multiply()
    }
}

