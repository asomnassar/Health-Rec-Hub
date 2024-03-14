import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import AppProvider from './context/AppContext.tsx'
import FormsProvider from './context/FormsContext.tsx'
import './index.css'
import { router } from './router.tsx'
import { store } from './store/store.ts'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <FormsProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </FormsProvider>
      </AppProvider>
    </Provider>
  </React.StrictMode>,
)
