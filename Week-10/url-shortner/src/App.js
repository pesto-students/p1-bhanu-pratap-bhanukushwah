import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Footer, Header, NotificationProvider } from './components/index'
import { GlobalProvider } from './context/AppState'
import Routes from './routes/'

const App = () => {
  return (
    <NotificationProvider>
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
      </GlobalProvider>
    </NotificationProvider>
  )
}

export default App