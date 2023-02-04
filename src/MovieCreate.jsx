import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Like } from "./Like";
import ToggleButton from "@mui/material/ToggleButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

export function MovieCreate() {
  const [Movie, setMovieCreate] = useState([]);
  const navigate = useNavigate();
  const reCall = () => {
    fetch("https://63db75e9a3ac95cec5a22b2d.mockapi.io/nutflix")
      .then((res) => res.json())
      .then((data) => setMovieCreate(data));
  };

  const radius = {
    borderRadius: "0px",
  };


  useEffect(() => {
    reCall();
  },[]);

  const call = (id) => {
    fetch(`https://63db75e9a3ac95cec5a22b2d.mockapi.io/nutflix/${id}`, {
      method: "DELETE",
    })
    .then(()=>reCall());
  };

  return (
    <Paper sx={radius} elevation={10}>
      <div className="movie-box">
        {Movie.map((movie) => (
          <MoviesCollection
            key={movie.id}
            id={movie.id}
            name={movie.name}
            poster={movie.poster}
            rating={movie.rating}
            summary={movie.summary}
            editButton={
              <IconButton 
              sx={{marginLeft:"auto"}}
              color="primary" 
              onClick={() => navigate("/edit-movie")}>
                <EditIcon />
              </IconButton>
            }
            deleteButton={
              <IconButton 
              sx={{marginLeft:"auto"}}
              color="error" 
              onClick={() => call(movie.id)}>
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </Paper>
  );
}

function MoviesCollection({id ,name , poster , rating , summary , deleteButton , editButton}) {

  const [show, setShow] = useState(true);
  const style = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  const [Movies,MoviesList] = useState([])
  
  const styles = {
    color: rating > 8 ? "green" : "red",
    fontWeight: 700,
  };

  useEffect(()=>{
    fetch("https://63db75e9a3ac95cec5a22b2d.mockapi.io/nutflix")
    .then((res)=>res.json())
    .then((data)=>MoviesList(data))
  },[]) 

  return (
    <Card className="container">
      <img src={poster} alt={name} />
      <div className="content">
        <div className="flex">
          <h2>
            {name}
            <ToggleButton className="buts" onClick={() => setShow(!show)}>
              {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </ToggleButton>
            <InfoIcon
              color="primary"
              className="details-icon"
              onClick={() => {
                navigate(`/movies/${id}`);
              }}
            />
          </h2>

          <p className="rating" style={styles}>
            ⭐ {rating}
          </p>
        </div>
        <p className="movie-sum" style={style}>
          {summary}
        </p>
        <Like  but={deleteButton} edit={editButton} /> 
      </div>
    </Card>
  );
}
