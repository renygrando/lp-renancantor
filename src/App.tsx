import { motion } from 'motion/react';
import HeroSection from './components/HeroSection';
import BiographySection from './components/BiographySection';
import ServicesSection from './components/ServicesSection';
import CredentialsSection from './components/CredentialsSection';
import VideosSection from './components/VideosSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <HeroSection />
      
      {/* Biography Section */}
      <BiographySection />
      
      {/* Videos Section */}
      <VideosSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Credentials Section */}
      <CredentialsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Contact Section */}
      <ContactSection />
    </motion.div>
  );
}