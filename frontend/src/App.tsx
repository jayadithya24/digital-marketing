import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import { PageType } from './types';

const AUTH_STORAGE_KEY = 'digitalexpert-authenticated';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    const isAuthenticated = window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    return isAuthenticated ? 'home' : 'auth';
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });

  const handleAuthenticated = () => {
    window.localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
    setCurrentPage('auth');
  };

  const handleNavigate = (page: PageType) => {
    if (!isAuthenticated && page !== 'auth') {
      setCurrentPage('auth');
      return;
    }

    setCurrentPage(page);
  };

  useEffect(() => {
    const pageNames: Record<PageType, string> = {
      home: 'Home - DigitalExpert',
      about: 'About Us - DigitalExpert',
      services: 'Our Services - DigitalExpert',
      portfolio: 'Portfolio - DigitalExpert',
      contact: 'Contact Us - DigitalExpert',
      auth: 'Login / Register - DigitalExpert',
    };
    document.title = pageNames[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    if (!isAuthenticated && currentPage !== 'auth') {
      return <Auth onAuthenticated={handleAuthenticated} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'auth':
        return <Auth onAuthenticated={handleAuthenticated} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        isAuthenticated={isAuthenticated}
      />
      <main className="pt-16">
        {renderPage()}
      </main>
      {isAuthenticated ? <Footer onNavigate={handleNavigate} /> : null}
    </div>
  );
}

export default App;
