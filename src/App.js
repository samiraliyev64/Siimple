import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
