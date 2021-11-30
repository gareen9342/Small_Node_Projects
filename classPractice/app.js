const MyClass = require("./MyClass")

const testFunc = () => {
    const myClass = new MyClass() //    MyClass { _name: undefined }
    console.log(myClass)
}
testFunc()

/**
 * javascript 에서 클래스란, 정확히는 함수를 이야기 한다.
 * 함수 본문은 생성자 메서드 contsructor에서 가져온다.
 * 생ㅅ어자 메서드가 없으면 본문이 비워진채로 함수가 만들어진다.
 *
 * 같은 클래스 내에서 정의한 메서드를 해당 클래스의 프로토타입에 저장한다.
 *
 *
 * class 문법에선 constructor가 있을 경우 new 연산자를 이용하지 않을 경우 에러가 발생한다.
 * new MyClass 를 이용하면 객체가 만들어 지고 객체의 메서드를 호출하면 함수의 protottype 프로퍼티에서 설명한 것처럼 메서드를 프로토타입에서 가져온다.
 *
 *
 */

