import { useState } from 'react'

import './App.css'
import Layout from './components/layout/Layout'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
