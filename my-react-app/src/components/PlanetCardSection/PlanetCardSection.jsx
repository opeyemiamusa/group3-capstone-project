import { useState, useEffect } from 'react';
import './PlanetCardSection.css';

function PlanetCardSection() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://anurella.github.io/json/planets.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response error');
        }
        return response.json();
      })
      .then((data) => {
        setPlanets(data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  return (
    <section id="PlanetCardSection" className="planet-grid-section">
      <div className="grid-container">
        <div className="grid-header">
          <h2>Visualizing the Differences Between Planets</h2>
          <p>
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how vastly different terrestrial planets
            are from gas giants and ice giants.
          </p>
        </div>

        {planets && (
          <div className="cards-display-grid">
            {planets.map((item, index) => (
              <div key={item.id || index} className="planet-card">
                <figure>
                  <div className="image-container-frame">
                    <img src={item.image} alt={item.planet} />
                  </div>
                  <figcaption>
                    <span className="card-planet-name">{item.planet}</span>
                    <span className="card-planet-distance">
                      Distance from Sun: {item.distanceFromSun} million km
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PlanetCardSection;