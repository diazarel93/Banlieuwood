import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SEO from './components/SEO';
import EnhancedSEO from './components/EnhancedSEO';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

const Films = lazy(() => import('./pages/Films'));
const Ateliers = lazy(() => import('./pages/Ateliers'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Institutions = lazy(() => import('./pages/Institutions'));
const Admin = lazy(() => import('./pages/Admin'));
const MediaManager = lazy(() => import('./pages/MediaManager'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onComplete={() => {
            setIsLoading(false);
            setTimeout(() => setShowContent(true), 100);
          }}
        />
      )}
      {showContent && (
        <>
          <SEO />
          <EnhancedSEO />
          <Navigation />
          <WhatsAppButton />
          <div className="page-transition">
            <Suspense fallback={
              <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/ateliers" element={<Ateliers />} />
              <Route path="/about" element={<About />} />
              <Route path="/institutions" element={<Institutions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/media-manager" element={<MediaManager />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
