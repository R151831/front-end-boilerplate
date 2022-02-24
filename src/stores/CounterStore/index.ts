import { observable, action } from 'mobx'

class CounterStore {
  @observable count!: number
  constructor() {
    this.init()
  }

  @action.bound
  init(): void {
    this.count = 0
  }

  @action.bound
  incrementCounter(): void {
    this.count = this.count + 1
  }

  @action.bound
  decrementCounter(): void {
    this.count = this.count - 1
  }

  @action.bound
  clearStore(): void {
    this.init()
  }
}

export default CounterStore
