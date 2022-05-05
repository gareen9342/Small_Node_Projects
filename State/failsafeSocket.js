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
    this.currentState.activate()
  }

  // online, offline 상태에 따라 다른 동작을 한다.
  send(data){
    this.currentState.send(data)
  }
}