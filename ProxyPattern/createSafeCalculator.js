function createSafeCalculator(calculator){
    return {
        divide(){
            const divisor = calculator.peekValue()
            if(divisor === 0){
                throw Error('Division by 0')
            }
            return calculator.divide()
        },

        putValue(value){
            // 위임된 함수들
            return this.calculator.putValue(value)
        },

        getValue(){
            return this.calculator.getValue()
        },

        peekValue(){
            return this.calculator.peekValue()
        },

        clear(){
            return this.calculator.clear()
        },
        multiply(){
            return this.calculator.multiply()
        }
    }
}
//-> 이런식으로 팩토리로 재구현해 확장이 가능하다