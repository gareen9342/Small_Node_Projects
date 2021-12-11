/**
 * 다른 객체에 대한 액세스를 제어하는 객
 */


const StackCalculator = require("./StackCalculator")

const calculator = new StackCalculator()
calculator.putValue(3)
calculator.putValue(2)
console.log(calculator.multiply()) // 3*2= 6

calculator.putValue(2)
console.log(calculator.multiply())// 6 * 2 = 12
