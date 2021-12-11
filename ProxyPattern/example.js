/**
 *
 * Proxy 객체는 언어 자체에 깊이 통합된 기능,
 * 개발자가 객체에서 수행할 수 있는 많은 작업을 가로채고 재지정할 tn dlT다.
 *
 * :메타 프로그래밍, 연산자 오버로딩
 *
 * 아직 프록시객체는 안정된 문법이 아니다. Node 버전이나 브라우저의 스펙을 잘 따져서 사용해야한다.
 */

const evenNumbers = new Proxy([],{
    get: (target, index) => index * 2,// 배열의 요소에 대한 접근을 가로채서 주어진 인덱스에 대한 짝수를 반환
    has: (target, number) => number % 2 === 0 // in 연산자의 사용을 가로채서 주어진 숫자가 짝수인지 여부를 확인함


})
console.log(2 in evenNumbers)
console.log(5 in evenNumbers)
console.log(evenNumbers)

