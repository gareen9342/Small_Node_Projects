class exception extends Error{}


export const levelSubscribe = (db) => {
    db.subscribe = (pattern, listener) =>{
        db.on("put", (key, val) => {
            const match = Object.keys(pattern).every(
                k => (pattern[k] === val[k])
            )
            if(match) {
                listener(key, val)
            }
        })
    }
    return db
}
//1. db 객체를 subscribe 함수로 데코레이트,
//2, 데이터 베이스에서 수행된 모든 입력 작업을 수신한다.
//3. 데이터 입력시 제공된 패턴의 모든 속성에 대해 존재여부 거검증
// 4. 일치하는 속성이 있을 시 리스너에게 알리게 된다.



