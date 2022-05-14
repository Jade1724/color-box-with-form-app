const InputBox = ({color, handleColorNameInput}) => {
  return (
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
  )
}

export default InputBox