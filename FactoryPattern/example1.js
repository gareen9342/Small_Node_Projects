function createImage(name){
    return new Imaage(name)
}

class Image{
    constructor(name) {
        this.name = name
    }
}

/**
 * 위와 같이 클래스를 이용하게 되면 해당 함수는 특정한 클래스 생성에만 종속되는 느낌
 * 하지만 아래와 같이 팩토리 패턴으로 사용하게 될 경우 유연하게 사용할 수 있다.
 */


function createImageWFactory(name) {
    if(name.match(/\.jpe?g$/)){
        return new ImageJpeg(name)
    }else if(name.match(/\.gif$/)){
        return new IamgeGif(name)
    }
}

//또한 틀래스를 숨겨 멋대로 확장하거나 수정하는 것을 막아준다.

// 어느정도 캡슐화를 강제할 숭 ㅣㅆ다는 것이다.
