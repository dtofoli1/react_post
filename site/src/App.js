import React from 'react'
import { Header } from './components/header.js'
import { Share } from './components/share.js'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <Header title="Compartilhe seu texto!" subtitle="By Dtofoli1" />
      <Share />
    </div>
  )
}

export default App;