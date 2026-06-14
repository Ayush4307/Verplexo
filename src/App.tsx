import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { DashboardPage } from './pages/DashboardPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-zinc-900 bg-[#FAFAFA]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<div className="p-8 text-center mt-20"><h1 className="text-3xl font-bold">Services</h1></div>} />
            <Route path="/portfolio" element={<div className="p-8 text-center mt-20"><h1 className="text-3xl font-bold">Portfolio</h1></div>} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contact" element={<div className="p-8 text-center mt-20"><h1 className="text-3xl font-bold">Contact Us</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
