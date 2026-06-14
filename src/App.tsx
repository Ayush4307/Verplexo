import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-zinc-900 bg-[#FAFAFA]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<div className="p-8 text-center mt-20"><h1 className="text-4xl font-bold text-brand">Verplexo Agency</h1><p className="mt-4 text-zinc-500">Home Page Placeholder</p></div>} />
            <Route path="/services" element={<div className="p-8 text-center mt-20"><h1 className="text-3xl font-bold">Services</h1></div>} />
            <Route path="/portfolio" element={<div className="p-8 text-center mt-20"><h1 className="text-3xl font-bold">Portfolio</h1></div>} />
            <Route path="/dashboard" element={<div className="p-8 text-center mt-20"><h1 className="text-3xl font-bold">Client Dashboard</h1></div>} />
            <Route path="/contact" element={<div className="p-8 text-center mt-20"><h1 className="text-3xl font-bold">Contact Us</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
