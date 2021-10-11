import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Grid, NewButton, Title } from 'components'
import { configureStore, register } from 'core'
import { GlobalStyles, theme } from 'styles'
import Numbers from 'components/numbers'

const { persistor, store } = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Content data-cy="content">
            <Title data-cy="title">Sudoku</Title>
            <Card data-cy="card">
              <NewButton />
              <Grid />
              <Numbers />
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
register()
