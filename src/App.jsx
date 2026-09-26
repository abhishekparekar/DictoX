import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ConsultationModal from './components/ConsultationModal';
import FloatingActions from './components/FloatingActions';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ResultsPage from './pages/ResultsPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-brand-emerald selection:text-brand-dark overflow-x-hidden">
        {/* Navigation / Sticky Header */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/results"
              element={<ResultsPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/industries"
              element={<IndustriesPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/course"
              element={<CoursePage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenConsultation={handleOpenConsultation} />}
            />
            {/* Catch-all fallback */}
            <Route
              path="*"
              element={<HomePage onOpenConsultation={handleOpenConsultation} />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenConsultation={handleOpenConsultation} />

        {/* Global Interactive Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
        />

        {/* Floating WhatsApp and Back to Top Actions */}
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}

