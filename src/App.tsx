import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { PagodaDetailPage } from './pages/PagodaDetailPage'
import { MaharMyatMuniPage } from './pages/MaharMyatMuniPage'
import { wzkPagodaConfig, yzmPagodaConfig } from './data/pagodas'
import { OtherPlacesPage } from './pages/OtherPlacesPage'
import { LocationMapPage } from './pages/LocationMapPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PagodasPage } from './pages/PagodasPage'
import { FestivalCalendarPage } from './pages/FestivalCalendarPage'
import { NarrationPage } from './pages/NarrationPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bg">
        <Header />
        <main className="w-full pt-[76px]">
          <Routes>
            <Route path="/" element={<MaharMyatMuniPage />} />
            <Route path="/wat-zom-kham" element={<PagodaDetailPage config={wzkPagodaConfig} />} />
            <Route path="/mahar-myat-muni-pagoda" element={<Navigate to="/" replace />} />
            <Route path="/yarzamuni" element={<PagodaDetailPage config={yzmPagodaConfig} />} />
            <Route path="/other-places" element={<OtherPlacesPage />} />
            <Route path="/location-map" element={<LocationMapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pagodas" element={<PagodasPage />} />
            <Route path="/festival-calendar" element={<FestivalCalendarPage />} />
            <Route path="/narration" element={<NarrationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
