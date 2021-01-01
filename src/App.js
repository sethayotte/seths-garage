import './App.css';

import garageHero from './assets/GarageHero.png';

function App() {
  return (
    <div className="App">
      <section className="comingSoon">
        <h1>Seth's Garage</h1>
        <h2>Coming Soon</h2>
        <img className="comingSoonHero" src={garageHero} alt="Seths Garage Hero" />
      </section>
    </div>
  );
}

export default App;
