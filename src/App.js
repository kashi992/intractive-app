import './assets/styles/main.scss';
import HeroSlider from './layout/hero-section';
import Navbar from './layout/navbar/navbar';

function App() {
  return (
    <section className="mainWraper">
   <Navbar/>
   <HeroSlider/>
    </section>
  );
}

export default App;
