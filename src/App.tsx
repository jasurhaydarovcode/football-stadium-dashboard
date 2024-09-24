import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from './pages/auth/login'
import Dashboard from './pages/dashboard/dashboard'
import Masters from './pages/master/Masters'
import Clients from './pages/client/Clients'
import NotFound from './pages/NotFound'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment >
  )
}

export default App