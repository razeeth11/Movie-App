import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import "./MovieEdit.css"
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import * as yup from "yup";  
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { API } from './api';


 export function EditMovie(){
  const [Mov,editMove] = useState(null)
  const {id} = useParams();

  
    useEffect(()=>{
     fetch(`${API}/${id}`)
    .then((res)=>res.json())
    .then((data)=> editMove(data))
  },[])

  return Mov ? <EditMovieForm Mov={Mov}/> : <img className='loading-page' src='https://thumbs.gfycat.com/AchingSpeedyArmyworm-max-1mb.gif' alt='Loading Page'/>
}

export function EditMovieForm({Mov}) {

 const navigate = useNavigate()
  const {id} = useParams();
  const movieValidate = yup.object({
     name: yup.string().required(),
     poster: yup.string().required(),
     rating: yup.number().required().max(10),
     summary: yup.string().required(),
     trailer: yup.string().required().url(),
  })

  const radius = {
    borderRadius: "0px",
    minHeight: "100vh"
  };

  const edit = async(values)=>{
    await fetch(`${API}/${id}` , {
    method : "PUT",
    body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      }
  },[]) 
  navigate("/movies")
}

    const formik = useFormik({
      initialValues: { 
        name: Mov.name ,
        poster: Mov.poster,
        rating: Mov.rating,
        summary: Mov.summary,
        trailer: Mov.trailer,
      },
      validationSchema: movieValidate,
      onSubmit: (values)=> edit(values)
    })
  


  return (
    <div className='form-val' sx={radius}>
      <Paper sx={radius} elevation={10}>
      <form onSubmit={formik.handleSubmit}>
      <div className='edit-movie'>
        <h1> <Button 
        onClick={() => navigate(-1)}
        variant='contained' className='back-but'><KeyboardBackspaceIcon/></Button>Edit Movie</h1>
        <TextField className='input' 
        name="name"
        id="filled-basic" 
        label="Movie name" 
        error={formik.errors.name && formik.touched.name ? formik.errors.name : null }
        helperText={formik.errors.name && formik.touched.name ? formik.errors.name : null }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name} variant="filled" 
        />

        <TextField className='input' 
        name="poster"
        id="filled-basic" 
        label="Poster" 
        error={formik.errors.poster && formik.touched.poster ? formik.errors.poster : null }
        helperText={formik.errors.poster && formik.touched.poster ? formik.errors.poster : null }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.poster} variant="filled" 
        />

        <TextField className='input' 
        name="rating"
        id="filled-basic" 
        label="Rating" 
        error={formik.errors.rating && formik.touched.rating ? formik.errors.rating : null }
        helperText={formik.errors.rating && formik.touched.rating ? formik.errors.rating : null }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.rating} variant="filled" 
        />

        <TextField className='input' 
        name="summary"
        id="filled-basic" 
        label="Summary" 
        error={formik.errors.summary && formik.touched.summary ? formik.errors.summary : null }
        helperText={formik.errors.summary && formik.touched.summary ? formik.errors.summary : null }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.summary} variant="filled" 
        />

        <TextField className='input' 
        name="trailer"
        id="filled-basic" 
        label="Trailer URL" 
        error={formik.errors.trailer && formik.touched.trailer ? formik.errors.trailer : null }
        helperText={formik.errors.trailer && formik.touched.trailer ? formik.errors.trailer : null }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.trailer}  variant="filled" 
        />

        <Button 
        variant="contained"
        type='submit'
        >Save</Button>       

      </div>
      </form>
      </Paper>
    </div>
  );
}
