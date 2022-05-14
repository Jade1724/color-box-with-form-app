const ColorBox = ({color}) => {
  return (
    <div className="box color-box" style={{ backgroundColor: `${color}` }}>
      <p>{color.length > 0 ? color : "Empty Value"}</p>
    </div>
  );
};

export default ColorBox;
