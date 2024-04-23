import React, { useState } from "react";
import "./App.css";
import { transportOptionsFormatted } from "./Utils/TransportOptionsFormatted";

const title = Array.from(transportOptionsFormatted.transportType).join( "-" );

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = ({ target: {value} }) => {
    setSelectedOption(value);
  };

  return (
    <div className="App">
      <p>
        Tipos de medio de transporte: { title }
      </p>
      <div className="select-container">
        <label>Selecciona un medio de transporte</label>
        <select value={selectedOption ||""} onChange={handleChange}>
          { transportOptionsFormatted.keys.map(transporter => <option value={transporter}>{transporter}</option>) }
          {/* 3- ....*/}
        </select>

        <button
        onClick={() => setSelectedOption(null)}
        >
          Limpiar
        </button>
      </div>
      {selectedOption && <ul>
        { Object.entries(transportOptionsFormatted.data[selectedOption])
          .map(([key, value]) => (<li>{key} : {value}</li>))}
        
      </ul>}
    </div>
  );
}

export default App;
