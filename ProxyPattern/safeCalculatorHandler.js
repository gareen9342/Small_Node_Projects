const safeCalculatorHandler = {
    get: (target, property) => {
        if(property === 'divide'){
            return function(){
                const divisor = target.peekValue()
                if(divisor===0){
                    throw new Error('Division by 0')
                }
                return target.divide()
            }
        }
        return target[property]
    }
    //

}
const StackCalculator = require("./StackCalculator")
const calculator = new StackCalculator()

const safeCalculator = new Proxy(
    calculator,
    safeCalculatorHandler
)
/**
 * 해당 객체에서 divide 하는 함수에 대한 접근을 ㅏㄱ로챔
 * 그리고 새로운 버전의 함수를 반환해준다.
 */
console.log(safeCalculator instanceof StackCalculator) // true 왜냐면 프록시 객체는 객체의 프로토타입을 상속한다.

