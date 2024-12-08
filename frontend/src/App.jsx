import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Dentists from './components/Dentists/Dentists';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';

// Pages
import About from './pages/About';
import Services from './pages/Services';
import PricingPage from './pages/Pricing';
import DentistsPage from './pages/Dentists';
import TestimonialsPage from './pages/Testimonials';
import FAQPage from './pages/FAQ';
import Contact from './pages/Contact';

// Theme and Styles
import theme from './theme';
import './App.css';

const HomePage = () => (
  <main>
    <Carousel />
    <HomeAbout />
    <HomeServices />
    <Pricing />
    <Dentists />
    <Testimonials />
    <FAQ />
  </main>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/dentists" element={<DentistsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
