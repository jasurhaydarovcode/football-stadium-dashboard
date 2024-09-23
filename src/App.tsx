import React from "react"
import { Route, Routes } from "react-router-dom"
import NotFound from './pages/NotFound'
import Login from './pages/login/login'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

export default App