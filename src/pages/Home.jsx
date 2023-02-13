import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
