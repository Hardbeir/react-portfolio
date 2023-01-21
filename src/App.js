import React from 'react'

import Intro from './components/intro'
import Skills from './components/skills'
import Portfolio from './components/portfolio'

import './app.sass'

const App = () => {
  return (
    <div>
        <Intro/>
        <Skills/>
        <Portfolio/>
    </div>
  )
}

export default App