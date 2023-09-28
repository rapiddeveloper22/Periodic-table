import './styles/App.css';
import data from './PeriodicTableJSON.json';
import { useEffect, useState } from 'react';
import Element from './Element.js';

function App() {
  const [objectData, setPeriodicTableObject] = useState(null);

  useEffect(() => {
    const jsonAsObject = data.elements;
    setPeriodicTableObject(jsonAsObject);
  }, [])

  return (
    <div className="app">
      <p id='heading'>Periodic Table</p>
      <div className='container'>
        <div className='all-elements'>
          {
            objectData ? objectData.map((item) => {
              if (item.number < 58 || (item.number > 71 && item.number < 90) || item.number > 103) {
                return (<Element id={item.name} properties={item} />);
              }
              else {
                return null;
              }
            })
              : null
          }
        </div>

        <div className='seperate-elements'>
          {
            objectData ? objectData.map((item) => {
              if ((item.number >= 58 && item.number <= 71) || (item.number >= 90 && item.number <= 103)) {
                return (<Element id={item.name} properties={item} />);
              }
              else {
                return null;
              }
            })
              : null
          }
        </div>
      </div>
    </div >

  );
}

export default App;
