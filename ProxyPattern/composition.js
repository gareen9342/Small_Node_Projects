const SafeCalculator = require("./SafeCalculator")
const StackCalculator = require("./StackCalculator")

const calculator = new StackCalculator()
const safeCalculator = new SafeCalculator(calculator)

calculator.putValue(3)
calculator.putValue(2)
console.log(calculator.multiply()) // 6

safeCalculator.putValue(2)
console.log(safeCalculator.multiply())

safeCalculator.putValue(0)
console.log(safeCalculator.multiply())

safeCalculator.clear()
safeCalculator.putValue(4)
safeCalculator.putValue(0)
console.log(safeCalculator.divide())

/**
 * safeCalculator를 calculator인스턴스의 프록시로 이용할 수 있다.
 * 이렇듯 한 번 ㄱ마싸서 안전한 호출을 보장하거나 함수를 가로챌 수 있는 것을 프록시 패턴이라고 할 수 있음.
 */