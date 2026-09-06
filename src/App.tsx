import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { WatZomKhamPage } from './pages/WatZomKhamPage'
import { MaharMyatMuniPage } from './pages/MaharMyatMuniPage'
import { YarzamuniPage } from './pages/YarzamuniPage'
import { NewsPage } from './pages/NewsPage'
import { NewsArticlePage } from './pages/NewsArticlePage'
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
            <Route path="/" element={<HomePage />} />
            <Route path="/wat-zom-kham" element={<WatZomKhamPage />} />
            <Route path="/mahar-myat-muni-pagoda" element={<MaharMyatMuniPage />} />
            <Route path="/yarzamuni" element={<YarzamuniPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsArticlePage />} />
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
