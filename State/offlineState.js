import jsonOverTcp from 'json-over-tcp-2'

export class OfflineState {
  constructor(failsafeSocket) {
    this.failsafeSocket = failsafeSocket
  }

  send(data){
    this.failsafeSocket.queue.push(data)
  }

  activate(){
    const retry = () =>  {
      setTimeout(() => this.activate(), 1000)
    }

    console.log("trying to connect...")

    this.failsafeSocket.socket = jsonOverTcp.connect(
      this.failsafeSocket.options,
      () => {
        console.log('Connection established')
        this.failsafeSocket.socket.removeListener('error', retry)
        this.failsafeSocket.changeState('online')
      }
    )

    this.failsafeSocket.socket.once('error', retry) // 작업이실패하면, 유효한 연결이 설정될 때까지 계속 시도한다. 연결이 될 경우 failsafeSocket의 상태가 온인으로 전환된다.
  }
}