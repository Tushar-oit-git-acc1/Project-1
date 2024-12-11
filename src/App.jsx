import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import DataTable from './components/DataTable';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap the app in the Provider */}
      <Router>
        <div>
          <Header />
          <HeroSection />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            {/* Add other routes as needed */}
          </Routes>
          <Services />
          <AboutUs />
          <Gallery />
          <Footer />
          <DataTable />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
