import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Toggle from "./components/toggle/Toggle";

function App() {
  const [count, setCount] = useState(0)

    return (
        <Toggle>Toggle on </Toggle>

    );

}

export default App
