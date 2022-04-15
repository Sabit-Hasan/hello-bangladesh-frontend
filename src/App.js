import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations';
import Book from './components/Book/Book';
import Subscribe from './components/Subscribe/Subscribe';
import MyCarousel from './components/Carousel/MyCarousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Book />
        <Destinations />
        <Subscribe />
        <MyCarousel />
        <Footer />
      </div>
    </>
  );
}

export default App;
