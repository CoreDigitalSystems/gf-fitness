import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AmenitiesPage from './pages/AmenitiesPage'
import ContactPage from './pages/ContactPage'
import CorporateWellnessPage from './pages/CorporateWellnessPage'
import FranchisePage from './pages/FranchisePage'
import FreeTrialPage from './pages/FreeTrialPage'
import GroupFitnessPage from './pages/GroupFitnessPage'
import LocationsPage from './pages/LocationsPage'
import TrainingPage from './pages/TrainingPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'

import AcworthPage from './pages/locations/AcworthPage'
import BristolPage from './pages/locations/BristolPage'
import SugarHillPage from './pages/locations/SugarHillPage'
import ComingSoonPage from './pages/locations/ComingSoonPage'

const comingSoonLocations = [
  { slug: 'augusta', city: 'Augusta', state: 'GA' },
  { slug: 'covington', city: 'Covington', state: 'GA' },
  { slug: 'huntsville', city: 'Huntsville', state: 'AL' },
  { slug: 'newington', city: 'Newington', state: 'CT' },
  { slug: 'vegas', city: 'N. Las Vegas', state: 'NV' },
  { slug: 'phoenix', city: 'Phoenix', state: 'AZ' },
]

function App() {
  return (
    <div className="bg-black">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/corporate-wellness" element={<CorporateWellnessPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/free-trial" element={<FreeTrialPage />} />
        <Route path="/group-fitness" element={<GroupFitnessPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/terms" element={<TermsPage />} />

        <Route path="/location/acworth" element={<AcworthPage />} />
        <Route path="/location/bristol" element={<BristolPage />} />
        <Route path="/location/sugarhill" element={<SugarHillPage />} />
        {comingSoonLocations.map((loc) => (
          <Route
            key={loc.slug}
            path={`/location/${loc.slug}`}
            element={<ComingSoonPage city={loc.city} state={loc.state} />}
          />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
