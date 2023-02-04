import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import "./MovieEdit.css"
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import * as yup from "yup";   

const formValidationSchema =yup.object({
  email: yup.string().required().min(5).max(8,"try something"),
  password: yup.string().required().min(5).max(8,"Too Much Password")
})

export function FormValidation() {

  const radius = {
    borderRadius: "0px",
    minHeight: "100vh"
  };


  const formik = useFormik({
    initialValues: { 
      email: "" ,
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values)=> console.log(values),
  })

  return (
    <div className='form-val' sx={radius}>
      <Paper sx={radius} elevation={10}>
      <form onSubmit={formik.handleSubmit}>
      <div className='form'>
         <h1>Log In</h1>

        <TextField className='input' 
        name="email"
        id="filled-basic" 
        label="Username/Email" 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email} variant="filled" 
        />
        {formik.errors.email && formik.touched.email ? formik.errors.email : null} 

        <TextField className='input' 
        name="password"
        id="filled-basic" 
        label="Password" 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}  variant="filled" />
        {formik.errors.password && formik.touched.password ? formik.errors.password : null}

  
        <Button 
        variant="contained"
        type='submit'
        >Log In</Button>

      </div>
      </form>
      </Paper>
    </div>
  );
}


