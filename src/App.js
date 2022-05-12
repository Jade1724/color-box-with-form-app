import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  function handleColorNameInput(colorName) {
    setColor(colorName);
  }

  return (
    <div className="App">
      <div>
        <div className="box color-box" style={{ backgroundColor: `${color}` }}>
          <p>{color.length > 0 ? color : "Empty Value"}</p>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="colorName"></label>
          <input
            id="colorName"
            className="box input-box"
            placeholder="Add color name"
            autoFocus
            type="text"
            value={color}
            onChange={(event) => handleColorNameInput(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
