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


const patchToSafeCalculator = require("./ObjectArgumentation")

const patchedCalulator = new StackCalculator()
const safeCalculator = patchToSafeCalculator(patchedCalulator)

//
/**
 * 하지만 이런식으로 직접 대상 객체를 수정하는 작업을 하게 될 경우에
 * 사이드 이펙트가 일어날 확률이 커짐 최대한 하지 말아야하는 패턴 중 하나이다.
 * 이럴 경우 프록시 객체를 만들면 된다
 * new Proxy(target, handler)
 * 대상객체와 핸들러를 인자로 받아들인다.
 * 핸들러  : 해당 자업이 프록시 인스턴스에서 수행될 떄 자동으로 호출됨..
 * (apply, get, set, has...)
 *
 */





