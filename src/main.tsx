import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import App from './App'
import { GlobalStyle } from './GlobalStyles/GlobalStyles'
import { theme } from './GlobalStyles/Theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
