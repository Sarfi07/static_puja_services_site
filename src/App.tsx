import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import DiyaFlareTransition from "./components/DiyaFlareTransition"; // 👈 import the new component

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* ✨ Add the divine flare animation */}
      <DiyaFlareTransition key={location.pathname + "-flare"} />

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-orange-50 text-gray-800 scroll-smooth">
        <Navbar />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
          </Routes>
        </PageWrapper>
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
