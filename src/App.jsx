import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Batismo from './pages/Batismo'

function App() {
  return (
    <BrowserRouter basename="/Tontom">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batismo" element={<Batismo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App