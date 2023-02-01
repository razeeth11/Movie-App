import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

export function MovieCreate({ movies, setMovieList }) {
  const [Name, movieName] = useState("");
  const [Poster, moviePoster] = useState("");
  const [Rating, movieRating] = useState("");
  const [Summary, movieSummary] = useState("");
  const [Trailer, movieTrailer] = useState("");
  const radius = {
    borderRadius: "0px",
  };
  return (
    <div className="main">
      <Paper style={radius} elevation={10}>
        <div style={dec}>
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
              onClick={() => {
                const newMovie = {
                  name: Name,
                  poster: Poster,
                  rating: Rating,
                  summary: Summary,
                  trailer: Trailer,
                };
                console.log(newMovie.name);
                if (
                  newMovie.name != "" &&
                  newMovie.poster != "" &&
                  newMovie.rating != "" &&
                  newMovie.summary != ""
                ) {
                  setMovieList([...movies, newMovie]);
                }
              }}
              className="add-Button"
              variant="contained"
            >
              Add Movie
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
