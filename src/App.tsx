import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';

const Films = lazy(() => import('./pages/Films'));
const Programme = lazy(() => import('./pages/Ateliers'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Etablissements = lazy(() => import('./pages/Institutions'));
const Admin = lazy(() => import('./pages/Admin'));
const MediaManager = lazy(() => import('./pages/MediaManager'));
const Soutenir = lazy(() => import('./pages/Soutenir'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <SEO />
      <Navigation />
      <Suspense fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/ateliers" element={<Navigate to="/programme" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/etablissements" element={<Etablissements />} />
          <Route path="/institutions" element={<Navigate to="/etablissements" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/soutenir" element={<Soutenir />} />
          <Route path="/dons" element={<Navigate to="/soutenir" replace />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/media-manager" element={<MediaManager />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
