import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { PagodaDetailPage } from './pages/PagodaDetailPage'
import { MaharMyatMuniPage } from './pages/MaharMyatMuniPage'
import {
  wzkPagodaConfig,
  yzmPagodaConfig,
  dslPagodaConfig,
  srsPagodaConfig,
  krPagodaConfig,
  ttmbPagodaConfig,
  skstPagodaConfig,
  sodmPagodaConfig,
  mhnbPagodaConfig,
  lthPlaceConfig,
  ktwPlaceConfig,
  khpPlaceConfig,
  ntlPlaceConfig,
} from './data/pagodas'
import { OtherPlacesPage } from './pages/OtherPlacesPage'
import { LocationMapPage } from './pages/LocationMapPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PagodasPage } from './pages/PagodasPage'
import { FestivalCalendarPage } from './pages/FestivalCalendarPage'
import { FestivalDetailPage } from './pages/FestivalDetailPage'
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
            <Route path="/dat-sam-loei" element={<PagodaDetailPage config={dslPagodaConfig} />} />
            <Route path="/satu-rattha-sumingala" element={<PagodaDetailPage config={srsPagodaConfig} />} />
            <Route path="/khema-rattha" element={<PagodaDetailPage config={krPagodaConfig} />} />
            <Route path="/thatta-thattaha-maha-bodhi" element={<PagodaDetailPage config={ttmbPagodaConfig} />} />
            <Route path="/swam-kyeim-shwe-hsan-taw" element={<PagodaDetailPage config={skstPagodaConfig} />} />
            <Route path="/shwe-ohn-daing-min" element={<PagodaDetailPage config={sodmPagodaConfig} />} />
            <Route path="/maing-hnun-nee-bayar" element={<PagodaDetailPage config={mhnbPagodaConfig} />} />
            <Route path="/other-places" element={<OtherPlacesPage />} />
            <Route path="/other-places/lone-tree-hill" element={<PagodaDetailPage config={lthPlaceConfig} />} />
            <Route path="/other-places/keng-tung-waterfall" element={<PagodaDetailPage config={ktwPlaceConfig} />} />
            <Route
              path="/other-places/loi-mwe-cherry-blossom-festival"
              element={<Navigate to="/festival-calendar/loi-mwe-cherry-blossom-festival" replace />}
            />
            <Route path="/other-places/keng-tung-haw-palace" element={<PagodaDetailPage config={khpPlaceConfig} />} />
            <Route path="/other-places/naung-tung-lake" element={<PagodaDetailPage config={ntlPlaceConfig} />} />
            <Route path="/location-map" element={<LocationMapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pagodas" element={<PagodasPage />} />
            <Route path="/festival-calendar" element={<FestivalCalendarPage />} />
            <Route path="/festival-calendar/:festivalId" element={<FestivalDetailPage />} />
            <Route path="/narration" element={<NarrationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
