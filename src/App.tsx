import React from "react"
import { Route, Routes } from "react-router-dom"
import NotFound from './pages/NotFound'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

export default App