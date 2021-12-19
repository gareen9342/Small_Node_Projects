 const createObservable  = function (target, observer){
    const observable = new Proxy(target, {
        set(obj, prop, value){ // object.prop = "something" 의 형식으로 접근하여 새로운 속성값을 할당하게 될 경우에 어떤 일이 일어나는지
            if(value !== obj[prop]){ // 재 설정하는 조건은 설정하려는 값이 이전에 설정한 값과 다른 경우를 의미한다.
                const prev = obj[prop]
                obj[prop] = value
                observer({ prop, prev, curr: value})
                return true
            }
        }
    })

    return observable
}
module.exports = createObservable


/**
 * 옵저버 패턴의 단순화된 버전이라고 한다.
 * 조금 더 구현해봐야 할 듯...
 *
 *
 */