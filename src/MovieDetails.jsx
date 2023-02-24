import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from './api';

export function MovieDetails() {
  const [movie,setMovieDetails] = useState([])
  const {id} = useParams();
  const navigate = useNavigate();

useEffect( ()=>{
   fetch(`${API}/movies/${id}`)
  .then((res)=> res.json())
  .then((data)=> setMovieDetails(data))
},[])

  return (
    <div className="movie-detailss">
      <Button
        variant="contained"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </Button>
      <div className="iframe">
        <iframe
          width="100%"
          height="480"
          src={movie.trailer}
          title={movie.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;      picture-in-picture; web-share"
         
        ></iframe>
      </div>
      <div className="movie-detail">
        <div className="details">
          <h2>{movie.name}</h2>
          <p>⭐ {movie.rating} </p>
        </div>
        <p className="sum">{movie.summary} </p>
      </div>
    </div>
  );
}
