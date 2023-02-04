import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Navigate, useNavigate } from "react-router-dom";

export function AddMovie() {
  const [Name, movieName] = useState(""); 
  const [Poster, moviePoster] = useState("");
  const [Rating, movieRating] = useState("");
  const [Summary, movieSummary] = useState("");
  const [Trailer, movieTrailer] = useState("");
  const navigate = useNavigate();

  const radius = {
    borderRadius: "0px",
    minHeight: "100vh"
  };
  
  const click = async () => {
    const newMovie = {
      name: Name,
      poster: Poster,
      rating: Rating,
      summary: Summary,
      trailer: Trailer,
    };
    if (
      newMovie.name != "" &&
      newMovie.poster != "" &&
      newMovie.rating != "" &&
      newMovie.summary != ""
    ) {
       await fetch("https://63db75e9a3ac95cec5a22b2d.mockapi.io/nutflix",{
          method : "POST",
          body: JSON.stringify(newMovie),
          headers: {
            "Content-Type": "application/json",
          }
      
    },[]);
    navigate("/movies")
  };
}

  return (
    <Paper sx={radius} elevation={10}>
      <div className="main">
          <div className="contain">
            <h2>Add Movie Here</h2>
            <TextField
              className="input"
              type="text"
              label="Movie Name"
              variant="filled"
              onChange={(ev) => movieName(ev.target.value)}
            />
            <TextField
              className="input"
              type="text"
              label="Poster"
              variant="filled"
              onChange={(ev) => moviePoster(ev.target.value)}
            />
            <TextField
              className="input"
              type="text"
              label="Rating"
              variant="filled"
              onChange={(ev) => movieRating(ev.target.value)}
            />
            <TextField
              className="input"
              type="text"
              label="Summary"
              variant="filled"
              onChange={(ev) => movieSummary(ev.target.value)}
            />
            <TextField
              className="input"
              type="text"
              label="Trailer"
              variant="filled"
              onChange={(ev) => movieTrailer(ev.target.value)}
            />
            <Button
              onClick={click}
              className="add-Button"
              variant="contained"
            >
              Add Movie
            </Button>
          </div>
      </div>
    </Paper>
  );
  
}
