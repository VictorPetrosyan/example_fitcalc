import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CalorieCalculator } from './components/CalorieCalculator';
import { RecipesPage } from './components/RecipesPage';
import { TipsPage } from './components/TipsPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { PremiumModal } from './components/PremiumModal';
import { AccountPage } from './components/AccountPage';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'calculator' | 'recipes' | 'tips' | 'about' | 'account';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Mock login - in real app would call API
    setUser({ name: email.split('@')[0], email });
    setIsLoggedIn(true);
    setAuthModalOpen(false);
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Mock register - in real app would call API
    setUser({ name, email });
    setIsLoggedIn(true);
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'calculator':
        return (
          <CalorieCalculator
            isLoggedIn={isLoggedIn}
            onOpenAuth={() => openAuthModal('login')}
            onOpenPremium={() => setPremiumModalOpen(true)}
          />
        );
      case 'recipes':
        return <RecipesPage />;
      case 'tips':
        return <TipsPage />;
      case 'about':
        return <AboutPage />;
      case 'account':
        return isLoggedIn ? (
          <AccountPage user={user!} onLogout={handleLogout} />
        ) : (
          <Hero onNavigate={setCurrentPage} />
        );
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isLoggedIn={isLoggedIn}
        user={user}
        onOpenAuth={openAuthModal}
        onLogout={handleLogout}
      />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer />
      
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={setAuthMode}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
      
      <PremiumModal
        isOpen={premiumModalOpen}
        onClose={() => setPremiumModalOpen(false)}
      />
      
      <Toaster position="top-right" richColors />
    </div>
  );
}