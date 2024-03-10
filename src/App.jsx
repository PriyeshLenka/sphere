import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Containers/LoginPage/LoginPage'
import LandingPagev1 from './Containers/LandingPage/LandingPagev1'
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
