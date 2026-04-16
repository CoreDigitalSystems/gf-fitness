import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import LocationsPage from './pages/LocationsPage'
import BristolPage from './pages/locations/BristolPage'
import AcworthPage from './pages/locations/AcworthPage'
import SugarHillPage from './pages/locations/SugarHillPage'
import ComingSoonPage from './pages/locations/ComingSoonPage'
import AmenitiesPage from './pages/AmenitiesPage'
import TrainingPage from './pages/TrainingPage'
import AboutPage from './pages/AboutPage'
import GroupFitnessPage from './pages/GroupFitnessPage'
import FreeTrialPage from './pages/FreeTrialPage'
import FranchisePage from './pages/FranchisePage'
import CorporateWellnessPage from './pages/CorporateWellnessPage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <TopBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/location/bristol" element={<BristolPage />} />
            <Route path="/location/acworth" element={<AcworthPage />} />
            <Route path="/location/sugarhill" element={<SugarHillPage />} />
            <Route path="/location/augusta" element={<ComingSoonPage city="Augusta" state="GA" />} />
            <Route path="/location/covington" element={<ComingSoonPage city="Covington" state="GA" />} />
            <Route path="/location/huntsville" element={<ComingSoonPage city="Huntsville" state="AL" />} />
            <Route path="/location/newington" element={<ComingSoonPage city="Newington" state="CT" />} />
            <Route path="/location/vegas" element={<ComingSoonPage city="N. Las Vegas" state="NV" />} />
            <Route path="/location/phoenix" element={<ComingSoonPage city="Phoenix" state="AZ" />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/group-fitness" element={<GroupFitnessPage />} />
            <Route path="/free-trial" element={<FreeTrialPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/corporate-wellness" element={<CorporateWellnessPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
