import { useState } from 'react'
import Main from './components/Main'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Responsive from './components/Responsive'

function App() {

  return ( 
      <div>
        <Responsive />
        <Main />
        <Work />
        <Projects />
        <Contact />
        <Sidenav />
     </div>
  )
}

export default App
