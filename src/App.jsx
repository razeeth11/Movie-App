import { useState } from "react";
import { Color } from "./Color"; 
import "./index.css";
import "./index1.css";
import "./Color.css";
import "./App.css";
import "./TicTac.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Like } from "./Like";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";  
import { TicTacToe } from "./TicTacToe";
import InfoIcon from '@mui/icons-material/Info';
import { Routes, Route, Link, useParams, useNavigate, Navigate} from "react-router-dom";
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function App(){
  const [movies, setMovieList] = useState([
    {
      "id": "100",
      "name": "Avengers",
      "poster": "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      "rating": 8.8,
      "summary": "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
      "trailer": "https://www.youtube.com/watch?v=TcMBFSGVi1c"
    },
    {
      "id": "99",
      "name": "Avatar 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
      "rating": 8.4,
      "summary": "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
      "trailer": "https://www.youtube.com/watch?v=d9MyW72ELq0"
    },
    {
      "id": "102",
      "name": "Spider Man (NWH)",
      "poster": "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-no-way-home-et00310790-1662017800.jpg",
      "rating": 8.8,
      "summary": "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      "trailer": "https://youtu.be/JfVOs4VSpmA"
    },
    {
      "id": "104",
      "name": "KGF 2",
      "rating": 8.8,
      "summary": "The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
      "poster": "https://moviegalleri.net/wp-content/uploads/2020/07/KGF-Chapter-2-Sanjay-Dutt-First-Look-Poster-HD.jpg",
      "trailer": "https://www.youtube.com/watch?v=Qah9sSIXJqk"
    },
    {
      "id": "106",
      "name": "Sardar",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjNlOWQ2YzEtYTc5Yy00MjcyLTg2YTgtMGVmM2YzZTk4N2JjXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
      "rating": 8,
      "summary": "Inspector Vijay Prakash is a publicity-hungry officer, who loves to be in the media limelight as he wants to undo hurdles in his profession due to the reputation of his absconding father Chandra Bose- a former spy who gets framed as a national traitor.",
      "trailer": "https://www.google.com/search?q=sardar+trailer&source=lmns&bih=648&biw=1280&rlz=1C1RXQR_enIN986IN986&hl=en&sa=X&ved=2ahUKEwiU1cuFgPL8AhW0MbcAHfZwBIgQ_AUoAHoECAEQAA#fpstate=ive&vld=cid:ebfa9f7d,vid:8OQzz_i3KFE"
    },
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      "rating": 8.8,
      "trailer": "https://youtu.be/NgsQ8mVkN8w",
      "id": "109"
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
      "id": "103",
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "name": "Jana Gana Mana",
      "poster": "https://m.media-amazon.com/images/M/MV5BMzU0MjM3YTQtZmNjYi00ODI5LThhYzQtOWMwZjAxMjg2MTRjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
      "summary": "A professor's death causes uproar across the nation and sends a policeman on a meticulous probe about the murder. However, the case soon puts the officer in trouble.",
      "rating": 8.8,
      "trailer": "https://m.youtube.com/watch?v=oN3tz-UetKw",
      "id": "109"
    },
    {
      "name": "Ayapanum Koshiyum",
      "poster": "https://m.media-amazon.com/images/M/MV5BYTZmYmI3OWEtNTIwOC00ODcwLWIwMGMtMWYwZWI3YzQ3NDJjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
      "summary": "Police officer Ayyappan is an upright man who always strives to do the right thing. Things change when a retired army havildar, Koshy, settles in his village and the two egos clash.",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/watch?v=8Wx3dAQ8pr4",
      "id": "109"
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
      "id": "107",
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      "name": "Dhrishyam 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BM2RiZDVjYWEtZGNhYy00ZGU0LTgwZjMtZTJmNmMyNGQ5NGYyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
      "summary": "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars.",
      "rating": 8,
      "trailer": "https://www.youtube.com/watch?v=cxA2y9Tgl7o",
      "id": "108"
    }
  ]
  );
  const [Show,ShowContent] = useState(false)
  const dec = {
    display: Show ? "block" : "none"
  }
  const [mode,setMode] = useState("dark")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  const navigate = useNavigate();
  return(
    <ThemeProvider theme={darkTheme}>
    <div className="nav-bar">
       <AppBar position="static" className="Nav">
        <Toolbar>
        <div className="nav-flex">
        <div>

          <Button color="inherit" onClick={()=>{
            navigate("/")
          }} >Home</Button>    
            <Button color="inherit" onClick={()=>{
              navigate("/movie-list")
            }} >Movies</Button>
          <Button color="inherit" onClick={()=>{
            navigate("/color")
          }} >Color Game</Button>
          <Button color="inherit"  onClick={()=>{
            navigate("/tic-tac-toe")
          }} >Tic Tac Toe Game</Button>
          <Button variant="contained" color="primary" onClick={()=>{
           ShowContent(!Show)
          }} >{ Show ? "Cancel" : "Add Movie"}</Button>
          </div>

          <div className="absolute">
       <Button variant="contained" color="primary" onClick={()=>{
          setMode( mode === "light" ?  "dark" : "light")
          }} 
          > 
            {mode === "dark" ? <LightModeIcon/> : <DarkModeIcon/> }
            { mode==="light" ? "Dark" : "Light"  }
          </Button>
       </div>
       </div>
        </Toolbar>
      </AppBar>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color" element={<Color />} />
        <Route path="/movie-list" element={<MovieCreate movies={movies} setMovieList={setMovieList}/>}  />
        <Route path="/movie-list/:id" element={<MovieDetails movies={movies} setMovieList={setMovieList}/>} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/game" element={<Navigate replace to="/tic-tac-toe" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </ThemeProvider>
  )

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
       <div className="home">
        <h1>Welcome to the Movie App</h1>
       </div>
    )
  }
  
  function MovieCreate({movies,setMovieList}){ 
    const [Name, movieName] = useState("");
    const [Poster, moviePoster] = useState("");
    const [Rating, movieRating] = useState("");
    const [Summary, movieSummary] = useState("");
    const [Trailer, movieTrailer] = useState("");
    const radius = {
      borderRadius : "0px",
    }
      return (
        <Paper style={radius} elevation={10}>
        <div className="main">
          <div style={dec}>
          <div className="contain" >
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
                  if(newMovie.name != "" && newMovie.poster != "" && newMovie.rating != "" && newMovie.summary != ""){
                    setMovieList([...movies, newMovie])
                  };
              }}
              className="add-Button"
              variant="contained"
            >
              Add Movie
            </Button>
          </div>
          </div>
          </div>
          <div className="movie-box">
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
        
        </Paper>
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

function MovieDetails({movies}){
  const {id} = useParams()
  const movie = movies[id]
  const navigate = useNavigate()
  return(
    <div className="movie-detailss">
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


}
