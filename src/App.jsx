import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from '../src/pages/LoginPage/LoginPage'
import LandingPagev1 from './pages/LandingPage/LandingPagev1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPagev1/>
    <LoginPage/>
    </>
  )
}

export default App
