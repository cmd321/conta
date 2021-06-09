import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import theme from 'theme'
import AppRouter from 'routes'

import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyle } from './globalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppRouter />
      </Router>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
