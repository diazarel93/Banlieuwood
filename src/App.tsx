import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import StickyCtaButton from './components/StickyCtaButton';
import SEO from './components/SEO';
import EnhancedSEO from './components/EnhancedSEO';
import LiveImpact from './components/LiveImpact';
import WhatsAppButton from './components/WhatsAppButton';
import NewsletterPopup from './components/NewsletterPopup';
import Home from './pages/Home';

const Films = lazy(() => import('./pages/Films'));
const Ateliers = lazy(() => import('./pages/Ateliers'));
const Deroulement = lazy(() => import('./pages/Deroulement'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const Reussites = lazy(() => import('./pages/Reussites'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Institutions = lazy(() => import('./pages/Institutions'));
const Gouvernance = lazy(() => import('./pages/Gouvernance'));
const Labels = lazy(() => import('./pages/Labels'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Partenaires = lazy(() => import('./pages/Partenaires'));
const Soutenir = lazy(() => import('./pages/Soutenir'));
const MediaManager = lazy(() => import('./pages/MediaManager'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
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
          <StickyCtaButton />
          <LiveImpact />
          <WhatsAppButton />
          <NewsletterPopup />
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
              <Route path="/deroulement" element={<Deroulement />} />
              <Route path="/about" element={<About />} />
              <Route path="/reussites" element={<Reussites />} />
              <Route path="/institutions" element={<Institutions />} />
              <Route path="/gouvernance" element={<Gouvernance />} />
              <Route path="/labels" element={<Labels />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/partenaires" element={<Partenaires />} />
              <Route path="/soutenir" element={<Soutenir />} />
              <Route path="/dons" element={<Soutenir />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
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
