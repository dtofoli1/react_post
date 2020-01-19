import React from 'react'
import { Header } from './components/header.js'
import { Share } from './components/share.js'


function App() {
  return (
    <div>
      <Header title="Compartilhe seu texto!" subtitle="By Dtofoli1" />
      <Share />
    </div>
  )
}

export default App;