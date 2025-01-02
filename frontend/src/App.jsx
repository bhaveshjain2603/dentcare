import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Hero/Carousel';
import HomeAbout from './components/About/About';
import HomeServices from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Dentist from './components/Dentists/Dentists';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Appointment from './components/Appointment/Appointment';
import AdminLayout from './components/Admin/AdminLayout';

// Pages
import About from './pages/About';
import Services from './pages/Services';
import PricingPage from './pages/Pricing';
import DentistsPage from './pages/Dentists';
import TestimonialsPage from './pages/Testimonials';
import FAQPage from './pages/FAQ';
import Contact from './pages/Contact';
import Dashboard from './pages/admin/Dashboard';
import Appointments from './pages/admin/Appointments';
import Dentists from './pages/admin/Dentists';
import Billing from './pages/admin/Billing';
import Patients from './pages/admin/Patients';
import Settings from './pages/admin/Settings';

// Theme and Styles
import theme from './theme';

const HomePage = () => (
  <main>
    <Carousel />
    <HomeAbout />
    <HomeServices />
    <Pricing />
    <Appointment />
    <Dentist />
    <Testimonials />
    <FAQ />
  </main>
);

// Wrapper component to handle conditional footer rendering
const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dentists" element={<DentistsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* Admin Routes */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/dentists" element={<Dentists />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </AdminLayout>
        } />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
