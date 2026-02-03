import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import TrainingPage from './pages/TrainingPage';
import AIServicesPage from './pages/AIServicesPage';
import ContactUsPage from './pages/ContactUsPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
