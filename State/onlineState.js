export class OnlineState {
  constructor(failsafeSocket) {
    this.failsafeSocket = failsafeSocket
    this.hasDisconnected = false
  }

  send(data){
    // 데이터를 큐에 넣은 다음 온라인 상태라고 가정, 소켓에 직접 쓰려고 한다.
    // 이를 위해 내부의 safeWrite 함수를 사용한다.
    this.failsafeSocket.queue.push(data)
    this._safeWrite(data)
  }
  _safeWrite(data){
    this.failsafeSocket.socket.write(data, err => {
      if(this.hasDisconnected && !err){
        this.failsafeSocket.queue.shift()
      }
    })
  }

  activate(){
    this.hasDisconnected = false

    for(const data of this.failsafeSocket.queue){
      this._safeWrite(data)
    }

    this.failsafeSocket.socket.once('error', () => {
      this.hasDisconnected = true
      this.failsafeSocket.changeState('offline')
    })
  }
}