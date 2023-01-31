import { useState } from "react";
import Button from "@mui/material/Button";
import "./Color.css";

export function Color() {
  const [color, showColor] = useState("");
  const [colors, setColors] = useState(["orange", "purple", "coral"]);
  const styles = {
    width: "75%",
    padding: "10px",
    fontSize:"16px",
    BoxSizing: "borderBox",
    backgroundColor: color,
  };
  return (
    <div className="main-box">
      <div className="boxxx">
      <input
        style={styles}
        type="text"
        onChange={(ev) => showColor(ev.target.value)}
      />
      <Button onClick={() => setColors([...colors, color])
      }>ADD</Button>
      </div>
      <div className="clr">
      {colors.map((clr, index) => (
        <ColorBox color={clr} key={index}/>
      ))}
      </div>
    </div>
  );
}

export function ColorBox({ color }) {
  const style = {
    width: "100%",
    height: "15px",
    margin: "5px",
    marginLeft: 0,
    backgroundColor: color,
  };
  return <div className="color-box" style={style}></div>;
}
