class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this.value);
    }
}

let button = new Button("hello");

// setTimeout(button.click, 1000)

/**
 * losing this => 잃어버린 this
 *
 * this 의 컨텍스트를 알 수 없게 되는 문제
 *
 * 이를 해결하기 위해선,
 * 래퍼 함수를 전달하거나,
 * 생성자 안 등에서 메서드를 객체에 바인딩하면 된다.
 *
 */

setTimeout(() => button.click(), 1000) // 이렇 식으로 한 번 래핑하면 된다.


class ButtonNew{
    constructor(value) {
        this.value = value
    }

    click = () => {
        console.log(this.value)
    }
}

let buttonNew = new ButtonNew("hello")

setTimeout(buttonNew.click, 1000)

// 클래스의 메서드로 만들어진 함수는 이 클래스로 만들어진 객체마다 독립적인 함수를 만들 수 있다. ------>>>>>