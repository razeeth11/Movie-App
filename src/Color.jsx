import { useState } from "react";
import Button from "@mui/material/Button";
import { ColorBox } from "./App";

function Color() {
  const [color, showColor] = useState("");
  const [colors, setColors] = useState(["orange", "purple", "coral"]);
  const styles = {
    backgroundColor: color,
  };
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(ev) => showColor(ev.target.value)}
      />
      <Button onClick={() => setColors([...colors, color])}>ADD</Button>
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const style = {
    width: "100%",
    height: "15px",
    margin: "5px",
    marginLeft: 0,
    backgroundColor: color,
  };
  return <div style={style}></div>;
}
