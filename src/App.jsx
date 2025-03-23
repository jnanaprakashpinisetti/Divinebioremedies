import { useState } from 'react'
import './App.scss';

import logo from '../src/assets/divine-bio-remedies-logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="banner"></div>
    <div className="container basic-info">
      <div className="logo">
        <img src={logo} alt="ivine-bio-remedies-logo" />
      </div>

      <h3>Welcome to Devine Bio Remides</h3>
      <h3>Website is under development</h3>
      <h2>Please feel free to call at <strong>9705567799</strong></h2>
    </div>
    </>
  )
}

export default App
