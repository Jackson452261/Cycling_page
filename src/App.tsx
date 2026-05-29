import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
 
// import Specifications from './components/Specifications';
import Footer from './components/Footer';
 
import ProductsPage from './pages/ProductsPage';
// import SpecificationsPage from './pages/SpecificationsPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
        
            <Products />
            {/* <Specifications /> */}
            <Testimonials />
          </>
        } />
     
        <Route path="/products" element={<ProductsPage />} />
        {/* <Route path="/specifications" element={<SpecificationsPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;