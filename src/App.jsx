import React from 'react'
import { Provider } from 'react-redux'

import Header from './components/header/Header'
import GameBoard from './components/game-board/GameBoard'
import Footer from './components/footer/Footer'
import Loader from './components/UI/loader/Loader'
import store from './components/store/store'

import './styles/reset.scss'
import './styles/App.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <GameBoard />
        <Footer />
        {false && <Loader />}
      </div>
    </Provider>
  )
}

export default App
