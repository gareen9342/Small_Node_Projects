class Profiler{
    constructor(label) {
        this.label = label
        this.lastTime = null
    }

    start(){
        this.lastTime = process.hrtime()
    }

    end(){
        const diff = process.hrtime(this.lastTime)
        console.log(`Timer = ${this.label} took ${diff[0]} seconds`)
    }
}


const noopProfiler={
    start(){},
    end(){}
}

export function createProfiler(label){
    if(process.env.NODE_ENV === 'production'){
        return noopProfiler
    }
    return new Profiler(label)
}

/**
 * createProfiler와 같이 팩토리 함수를 이용하여
 * 프로덕션 모드에서는 프로파일링을 하지 않을 수있고, 다른 실행 환경에서는 프로파일링을 할 수있다.
 * 이렇듯 객체의 생성과 구현을 분리할 때 장점을 가질 수 있다.
 * 예를 들어 실전에서는
 * 패키지 하나는 팩토리 함수 하나만을 제공하지만,
 * 팩토리는 다양한 검사를 구행하고 해당 환경에 맞는 객체를 생성해줄 수있다.
 * 마지막으로 해당 객체를 생성하여 반환할 수있다.
 *
 *
 */