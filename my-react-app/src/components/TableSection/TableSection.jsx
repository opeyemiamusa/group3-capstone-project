
import './TableSection.css';

function TableSection() {
  const tableData = [
    { type: 'Terrestrial Planets', name: 'Mercury', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
    { type: 'Terrestrial Planets', name: 'Venus', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
    { type: 'Terrestrial Planets', name: 'Earth', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
    { type: 'Terrestrial Planets', name: 'Mars', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
    { type: 'Jovian Planets - Gas Giants', name: 'Jupiter', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
    { type: 'Jovian Planets - Gas Giants', name: 'Saturn', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
    { type: 'Jovian Planets - Ice Giants', name: 'Uranus', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
    { type: 'Jovian Planets - Ice Giants', name: 'Neptune', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
    { type: 'Dwarf Planets', name: 'Pluto', mass: '0.0130', diameter: '4,879', density: '5427', gravity: '3.7' }
  ];

  return (
    <section className="table-section">
      <div className="table-container">
        <h2>Planetary Facts at a Glance</h2>
        <p className="table-subtitle">Below is a comparative table of major planets in our solar system. The data highlights key physical <br /> properties used by astronomers and researchers worldwide.</p>
        <p className="table-caption">Data about the planets of our solar system (Planetary facts taken from NASA)</p>
        
        <div className="nasa-table-wrapper">
          <table className="nasa-facts-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Mass (10 24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="span-category" rowSpan="4" colSpan="2">Terrestrial Planets</td>
                <td>{tableData[0].name}</td><td>{tableData[0].mass}</td><td>{tableData[0].diameter}</td><td>{tableData[0].density}</td><td>{tableData[0].gravity}</td>
              </tr>
              <tr>
                <td>{tableData[1].name}</td><td>{tableData[1].mass}</td><td>{tableData[1].diameter}</td><td>{tableData[1].density}</td><td>{tableData[1].gravity}</td>
              </tr>
              <tr>
                <td>{tableData[2].name}</td><td>{tableData[2].mass}</td><td>{tableData[2].diameter}</td><td>{tableData[2].density}</td><td>{tableData[2].gravity}</td>
              </tr>
              <tr>
                <td>{tableData[3].name}</td><td>{tableData[3].mass}</td><td>{tableData[3].diameter}</td><td>{tableData[3].density}</td><td>{tableData[3].gravity}</td>
              </tr>
              <tr>
                <td className="span-category" rowSpan="4">Jovian Planets</td>
                <td className="span-category" rowSpan="2">Gas Giants</td>
                <td>{tableData[4].name}</td><td>{tableData[4].mass}</td><td>{tableData[4].diameter}</td><td>{tableData[4].density}</td><td>{tableData[4].gravity}</td>
              </tr>
              <tr>
                <td>{tableData[5].name}</td><td>{tableData[5].mass}</td><td>{tableData[5].diameter}</td><td>{tableData[5].density}</td><td>{tableData[5].gravity}</td>
              </tr>
              <tr>
                <td className="span-category" rowSpan="2">Ice Giants</td>
                <td>{tableData[6].name}</td><td>{tableData[6].mass}</td><td>{tableData[6].diameter}</td><td>{tableData[6].density}</td><td>{tableData[6].gravity}</td>
              </tr>
              <tr>
                <td>{tableData[7].name}</td><td>{tableData[7].mass}</td><td>{tableData[7].diameter}</td><td>{tableData[7].density}</td><td>{tableData[7].gravity}</td>
              </tr>
              <tr>
                <td className="span-category" colSpan="2">Dwarf Planets</td>
                <td>{tableData[8].name}</td><td>{tableData[8].mass}</td><td>{tableData[8].diameter}</td><td>{tableData[8].density}</td><td>{tableData[8].gravity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TableSection;;