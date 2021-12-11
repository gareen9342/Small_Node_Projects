module.exports = function patchToSafeCalculator(calcultor){
    const divideOrig = calculator.divide
    calcultor.divide = () => {
        const divisor = calculator.peekValue()
        if(divisor === 0){
            throw Error('Division by 0')
        }
        return divideOrig.apply(calculator)
    }
    return calcultor
}