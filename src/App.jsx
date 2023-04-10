import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Hsin Hsin Chen's self-introduction</h2>
      <div className="card">
        <p>
          I am a graduate student studying at the Institute of Electrical Engineering of National Taiwan University, learning information security-related technologies and knowledge.
        </p>
      </div>
      <p className="read-the-docs">
        This webpage is created using Vue and React.
      </p>
    </div>
  )
}

export default App
