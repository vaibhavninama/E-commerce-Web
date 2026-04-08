import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import Store from './redux/store.js'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 
    <HashRouter>

      <Provider store={Store} >
        <App />
      </Provider>
    </HashRouter>




  ,
)
