import { useState } from "react";
import ColorBox from "./ColorBox";
import InputBox from "./InputBox";

function App() {
  const [color, setColor] = useState("");

  function handleColorNameInput(colorName) {
    setColor(colorName);
  }

  return (
    <div className="App">
      <div>
        <ColorBox color={color} />
        <InputBox color={color} handleColorNameInput={handleColorNameInput} />
      </div>
    </div>
  );
}

export default App;
