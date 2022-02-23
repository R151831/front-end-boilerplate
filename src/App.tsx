import React from 'react'
import './index.css'
import ReactLogo from './Icons/ReactLogo'

const App = () => {
  return (
    <div className='app'>
      <header className='bg-indigo-900 app-header'>
        <ReactLogo className='app-logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='app-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
