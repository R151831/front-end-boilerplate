import { Provider } from 'mobx-react'
import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'

import Home from './components/Home'
import stores from './stores'
import './index.css'

const App = () => (
  <Provider {...stores}>
    <BrowserRouter>{<Home />}</BrowserRouter>
    <ToastContainer
      position='bottom-center'
      autoClose={1000}
      closeOnClick
      rtl={false}
      transition={Slide}
      draggable
      pauseOnHover
      hideProgressBar
      newestOnTop
    />
  </Provider>
)

export default App
