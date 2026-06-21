import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './utils/ScrollToTop'
import { ThemeProvider } from './utils/ThemeContext'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { CookieBanner } from './components/CookieBanner'
import { PageLoader } from './components/PageLoader'
import { AnimatePresence, motion } from 'framer-motion'

// Route-level code splitting — each page loads as its own JS chunk
const HomePage      = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })))
const ServicesPage  = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })))
const DashboardPage = lazy(() => import('./pages/DashboardPage').then(m => ({ default: m.DashboardPage })))
const ContactPage   = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })))
const BlogPage      = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })))
const BlogPostPage  = lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })))
const AboutPage     = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })))
const CareersPage   = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })))
const PrivacyPage   = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })))
const TermsPage     = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })))
const PricingPage   = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })))
const NotFoundPage  = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })))

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/"          element={<HomePage />} />
            <Route path="/services"  element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/blog"      element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact"   element={<ContactPage />} />
            <Route path="/about"     element={<AboutPage />} />
            <Route path="/careers"   element={<CareersPage />} />
            <Route path="/privacy"   element={<PrivacyPage />} />
            <Route path="/terms"     element={<TermsPage />} />
            <Route path="/pricing"   element={<PricingPage />} />
            <Route path="*"          element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgressBar />
        <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
        <CookieBanner />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

