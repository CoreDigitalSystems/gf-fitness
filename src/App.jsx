import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <TopBar />
      <Navbar />
      <main id="main-content" className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
