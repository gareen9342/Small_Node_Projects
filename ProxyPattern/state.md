 > 상태 패턴은 컨텍스트의 상태에 따라 전략이 변경되는 특별한 전략 패턴..따라

 어떠한 컨텍스트, 혹은 입력 인자와 같은 다양한 변수에 따라 전략을 선택한다는 것

 리액트에서 state에 따라 컴포넌트의 상태가 변하듯, 동적으로 어떤 동작을 변경하고 주위 객체에 영향을 끼치게 한다는 뜻인듯...?


아래는 지금 예시의 코트에서 구현할 일련의 이벤트.

1. 예약이 생성되면, 사용자가 예약을 확인하 수 있다. (confirm() 함수의 실행)
2. 윙의 상태에서는 취소를 할 수 없다. 예약이 확정되어야 취소가 가능하다.
3. 하지만 구매하기 전에 마음이 바뀌면 삭제할 수있다.
4. 예약이 완료되면 confirm함수를 다시 사용하는 것은 의미가 없다
5. 예약일 전날에는 취소를 할 수 없다. 

## 안전한 소켓을 구현

서버와 연결이 끊어져도 실패하지 않는 TCP 소켓을 구현해보자.

서버가 오프라인 상태인 동한 전송된 모든 데이터를 큐에 넣은 뒤

연결이 다시 설정되는 즉시 다시 전송

서버가 다운되면 다시 온라인 상태가 될 때까지 이 데이터를 로컬 큐에 담는다. 

