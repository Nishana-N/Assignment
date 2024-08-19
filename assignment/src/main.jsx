import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
  </Provider>,
  </StrictMode>,
)
