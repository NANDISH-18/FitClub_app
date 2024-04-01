import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonial/Testimonials';
import Programs from './components/programs/Programs';
function App() {
  return (
    <div className="App">
          <span style={{color: 'white'}}>
            <Hero/>
            <Programs/>
            <Reasons/>
            <Plans/>
            <Testimonials/>
            <Join />
            <Footer/>
          </span>
    </div>
  );
}

export default App;
