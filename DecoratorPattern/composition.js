/**
 * 컴포지션으로 구현
 */

class EnhancedCAlculator{
    constructor(calculator) {
        this.calculator = calculator
    }

    add(){
        const addend2 = this.getValue()
        const addend1 = this.getValue()
        const result = addend1 + addend2
        this.putValue(result)
        return result
    }

    divide(){
         const divisor = this.calculator.peekValue()
        if(divisor === 0){
            throw Error('DIvision by 0')
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
const StackCalculator = require("./StackCalculator")
const calculator = new StackCalculator()
const enhancedCalculator = new EnhancedCAlculator(calculator)

enhancedCalculator.putValue(4)
enhancedCalculator.putValue(3)
console.log(enhancedCalculator.add())
enhancedCalculator.putValue(2)
console.log(enhancedCalculator.multiply())

/**
 * 프록시 객체를 만들었을 때 처럼 프록시 패턴을 이용하여 만들 수 있음. 
 */