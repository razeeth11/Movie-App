import { useState } from "react";
import { Color } from "./Color"; 
import "./index.css";
import "./index1.css";
import "./Color.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from "@mui/material/Button";
import { Like } from "./Like";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import { TicTacToe } from "./TicTacToe";
import InfoIcon from '@mui/icons-material/Info';
import { Routes, Route, Link, useParams, useNavigate, Navigate} from "react-router-dom";

export default function App(){
  const [movies, setMovieList] = useState([
    {
      "id": "99",
      "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
      "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
      "id": "100",
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      "id": "101",
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      "id": "102",
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": "103",
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "id": "104",
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      "id": "105",
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      "id": "106",
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      "id": "107",
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      "name": "PS2",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      "rating": 8,
      "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
      "id": "108"
    },
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      "rating": 8.8,
      "trailer": "https://youtu.be/NgsQ8mVkN8w",
      "id": "109"
    }
  ]
  );
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/color">Color Game</Link>
          </li>
          <li>
            <Link to="/movie-list">Movies</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe">Tic Tac Toe Game</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color" element={<Color />} />
        <Route path="/movie-list" element={<MovieCreate movies={movies}/>}  setMovieList={setMovieList}/>
        <Route path="/movie-list/:id" element={<MovieDetails movies={movies} setMovieList={setMovieList}/>} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/game" element={<Navigate replace to="/tic-tac-toe" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )


function MovieDetails({movies}){
  const {id} = useParams()
  const movie = movies[id]
  const navigate = useNavigate()
  return(
    <div>
      <Button variant="contained" onClick={()=>{
            navigate(-1)
          }}>Back
          </Button>
      <div className="iframe"> 
          <iframe width="100%" 
                height="480" 
                src={movie.trailer} 
                title={movie.name} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;      picture-in-picture; web-share" 
                allowfullscreen >
          </iframe>
      </div>
    <div className="movie-detail">
          <div className="details">
              <h2>{movie.name}</h2>
              <p>⭐ {movie.rating} </p>
          </div>
          <p className="sum">{movie.summary} </p>
          
      </div>
    </div>
  )
}


function NotFound(){
  return(
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <img src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt="404-Not-Found" />
    </div>
  )
}

function Home(){
  return(
     <div>
      <h1>Welcome to the Movie App</h1>
     </div>
  )
}


function MovieCreate({movies, setMovieList}){
    const [Name, movieName] = useState("");
    const [Poster, moviePoster] = useState("");
    const [Rating, movieRating] = useState("");
    const [Summary, movieSummary] = useState("");

  
    return (
      <div className="main">
        <div className="contain">
          <h2>Add Movies</h2>
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
          <Button
            onClick={() => {
                const newMovie = {
                  name: Name,
                  poster: Poster,
                  rating: Rating,
                  summary: Summary,
                };
                setMovieList([...movies, newMovie]);
            }}
            className="add-Button"
            variant="contained"
          >
            Add Movie
          </Button>
        </div>
  
        <div className="App">
          {movies.map((movie,index) => (
            <MoviesCollection
              key={index}
              id={index}
              name={movie.name}
              poster={movie.poster}
              rating={movie.rating}
              summary={movie.summary}
            />
          ))}
        </div>
      </div>
    );
}

function MoviesCollection({ name, poster, rating, summary,id }) {
  const [show, setShow] = useState(true);
  const style = {
    display: show ? "block" : "none",
  };
  const styles = {
    color: rating > 8 ? "green" : "red",
    fontWeight: 700,
  };
  const navigate = useNavigate();
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
            <InfoIcon color="primary" className="details-icon" onClick={()=>{
              navigate( `/movie-list/${id}`)
            }}/>
          </h2>
          
          <p className="rating" style={styles}>
            ⭐ {rating}
          </p>
        </div>
        <p className="movie-sum" style={style}>
          {summary}
        </p>
        <Like />
      </div>
    </Card>
  );
}

}
