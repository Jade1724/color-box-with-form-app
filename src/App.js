import "./App.css";
import {useState} from 'react';

function App() {

  const [color, setColor] = useState('');

  function handleColorNameInput(colorName) {
    setColor(colorName);
  }

  return (
    <div>
      <div style={{backgroundColor: `${color}`}}>{color.length > 0 ? color : 'Empty Value'}</div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="colorName"></label>
        <input id="colorName" placeholder="Add color name" type="text" value={color} onChange={(event) => handleColorNameInput(event.target.value)} />
      </form>
    </div>
  );
}

export default App;
