import React from 'react'

import ReactLogo from '../../Icons/ReactLogo'

export const Home = () => (
  <div className='app'>
    <header className='app-header'>
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
