import { useState } from "react";
import Button from "@mui/material/Button";
import "./Color.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export function Color() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const radius = {
    borderRadius : "0px",
    height: window.innerHeight,
    width: window.innerWidth
  }
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
    <ThemeProvider theme={darkTheme}>
    <div style={radius} className="main-box">
      <h1>Add Color Game</h1>
      <div className="boxxx">
        
      <input
        style={styles}
        type="text"
        onChange={(ev) => showColor(ev.target.value)}
      />
      <Button onClick={() => {
      if(color != "" ){
        setColors([...colors, color])
      }showColor("") }
      }>ADD</Button>
      </div>
      <div className="clr">
      {colors.map((clr, index) => (
        <ColorBox color={clr} key={index}/>
      ))}
      </div>
    </div>
    </ThemeProvider>
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
