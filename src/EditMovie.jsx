import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import "./MovieEdit.css"
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import * as yup from "yup";  
import { useParams } from 'react-router-dom';

const movieValidate = yup.object({
   name: yup.string().required(),
   poster: yup.string().required(),
   rating: yup.number().required(),
   summary: yup.string().required(),
   trailer: yup.string().required(),
})

export function EditMovie() {

  const radius = {
    borderRadius: "0px",
    minHeight: "100vh"
  };

  const {id} = useParams();

  // fetch(`https://63db75e9a3ac95cec5a22b2d.mockapi.io/nutflix/${id}`)


    const formik = useFormik({
      initialValues: { 
        name: "" ,
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieValidate,
      onSubmit: (values)=> console.log(values),
    })

  return (
    <div className='form-val' sx={radius}>
      <Paper sx={radius} elevation={10}>
      <form onSubmit={formik.handleSubmit}>
      <div className='edit-movie'>
        <h1>Edit Movie</h1>
        <TextField className='input' 
        name="name"
        id="filled-basic" 
        label="Movie name" 
        onChange={formik.handleChange}
        value={formik.values.name} variant="filled" 
        />

        <TextField className='input' 
        name="poster"
        id="filled-basic" 
        label="Poster" 
        onChange={formik.handleChange}
        value={formik.values.poster} variant="filled" 
        />

        <TextField className='input' 
        name="rating"
        id="filled-basic" 
        label="Rating" 
        onChange={formik.handleChange}
        value={formik.values.rating} variant="filled" 
        />

        <TextField className='input' 
        name="summary"
        id="filled-basic" 
        label="Summary" 
        onChange={formik.handleChange}
        value={formik.values.summary} variant="filled" 
        />

        <TextField className='input' 
        name="trailer"
        id="filled-basic" 
        label="Trailer URL" 
        onChange={formik.handleChange}
        value={formik.values.trailer}  variant="filled" />

  
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
