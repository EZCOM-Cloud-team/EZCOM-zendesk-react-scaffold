import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import client from './zafClient'
import '../index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
client.invoke('resize', { width: '100%', height: '500px' })
