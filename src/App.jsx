import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
