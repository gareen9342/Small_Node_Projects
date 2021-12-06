/**
 *    빌더 패턴은 복잡한 객체의 생성을 단순화하는 생성 디자인 패턴
 * -> 인자의 목록이 길거나, 많은 복잡한 매개 변수를 입력으로 사용하는 생성자가 있는 클래스의 단접을 극복가능
 *
 *    인자가 많은 생성자를 가지고 있는 클래스가 있을 때에 생성자에 객체리터럴로 모든 인수를 모아 넣는 방법으로 개선
 * -> 하지만 이렇게 만들 경우 클래스를 열어봐야하는 단점이 있음
 * 빌더 패턴은 이런 단점을 보완한다.
 *
 *
 */
class Boat{
    constructor(allParameters) {
        this.hasMotor = allParameters.hasMotor
        this.sailsCount = allParameters.sailsCount
        this.motorCount = allParameters.motorCount
        this.motorBrand = allParameters.motorBrand
        this.motorModel = allParameters.motorModel
        this.hasSails = allParameters.hasSails
        this.sailsMaterial = allParameters.sailsMaterial
        this.sailsColor = allParameters.sailsColor
        this.hullColor = allParameters.hullColor
        this.hasCabin = allParameters.hasCabin
    }
}
module.exports = class BoatBuilder{
    withMotors(count, brand, model){
        this.hasMotor = true
        this.motorCount = count
        this.motorBrand = brand
        this.motorModel = model
        return this
    }

    withSails(count, material, color){
        this.hasSails = true
        this.sailsCount = count
        this.sailsMaterial = material
        this.sailsColor = color
        return this
    }

    hullColor (color){
        this.hullColor = color
        return this
    }

    withCabin(){
        this.hasCabin = true
        return this
    }

    build(){
        return new Boat({
            hasMotor: this.hasMotor,
            motorCount: this.motorCount,
            motorBrand: this.motorBrand,
            motorModel : this.motorModel,
            hasSails: this.hasSails,
            sailsCount: this.sailsCount,
            sailsMaterial: this.sailsMaterial,
            sailsColor: this.sailsColor,
            hullColor: this.hullColor,
            hasCabin: this.hasCabin
        })
    }
}