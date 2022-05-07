import {OfflineState} from  './offlineState.js'
import {OnlineState} from './onlineState.js'

export class FailsafeSocket{
  constructor(options){
    this.options = options
    this.queue = []
    this.currentState = null
    this.socket = null
    this.states = {
      offline : new OfflineState(this),
      online: new OnlineState(this)
    }
    this.changeState('offline')
  }

  // 상태 전환을 하는 함수
  changeState(state){
    console.log(`Activating state :${state}`)
    this.currentState = this.states[state]
    this.currentState.activate() // 초기에는 offline ㅇ이었다가, 이 함수를 호출하게 되면 그때 소켓이 생성된다.

  }

  // online, offline 상태에 따라 다른 동작을 한다.
  send(data){
    this.currentState.send(data)
  }
}