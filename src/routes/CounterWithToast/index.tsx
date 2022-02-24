import 'react-toastify/dist/ReactToastify.css'

import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import CounterStore from '../../stores/CounterStore'

interface CounterWithToastProps {
  dummy?: string
}

interface InjectedProps extends CounterWithToastProps {
  counterStore: CounterStore
}

@inject('counterStore')
@observer
class CounterWithToast extends Component<CounterWithToastProps> {
  get injectedProps(): InjectedProps {
    return this.props as InjectedProps
  }

  handleIncrement = (): void => {
    const { counterStore } = this.injectedProps
    counterStore.incrementCounter()
    toast(`Count has been incremented by 1`)
  }

  handleDecrement = (): void => {
    const { counterStore } = this.injectedProps
    if (counterStore.count !== 0) {
      counterStore.decrementCounter()
      toast(`Count has been decremented by 1`)
    } else {
      toast(`Count is 0 and it can't be decremented`)
    }
  }

  render(): JSX.Element {
    const { counterStore } = this.injectedProps
    console.log('count', counterStore.count)

    return (
      <div>
        <h1> count: {counterStore.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>

        <Link to='/'>
          <p>Home</p>
        </Link>
      </div>
    )
  }
}

export default CounterWithToast
