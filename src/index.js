import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'

import App from './components/App'


const httpLink = new HttpLink({ uri: 'http://localhost:4000' })


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()