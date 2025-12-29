import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import UniversitiesPage from './pages/UniversitiesPage';
import ProfessorsPage from './pages/ProfessorsPage';
import pageBackground from './assets/universities_bg.png';
import professorsBackground from './assets/professors_bg.png';

type Tab = 'home' | 'universities' | 'professors';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div
      className="min-h-screen"
      style={
        activeTab === 'universities' ? {
          backgroundImage: `url(${pageBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        } : activeTab === 'professors' ? {
          backgroundImage: `url(${professorsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        } : { backgroundColor: 'white' }
      }
    >
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isTransparent={activeTab === 'home' || activeTab === 'universities' || activeTab === 'professors'}
      />
      <main className="transition-opacity duration-300">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'universities' && <UniversitiesPage />}
        {activeTab === 'professors' && <ProfessorsPage />}
      </main>
    </div>
  );
}

export default App;
