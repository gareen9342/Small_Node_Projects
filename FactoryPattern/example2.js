/*
자바스크립트 에서 캡슐화를 적용하는 주요 방법 중 하나는 함수의 스코프오 ㅏ클로저를 이용하는 것이다.
팩토리를 이용하면 쉽게 프라이빗 변수들을 강제할 수 있다
 */


function createPerson(name){
    const privateProperties ={}
    const person = {
        serName(name){
            if(!name){
                throw new Error('A person must have a name')
            }

            privateProperties.name = name

        },
        getName(){
            return privateProperties.name
        }
    }
    person.setName(name)
    return person
}