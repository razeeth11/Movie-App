import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Paper from "@mui/material/Paper";
import "./MovieEdit.css"
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import * as yup from "yup";   

const formValidationSchema =yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(5,"Min 5 characters needed").max(8,"Max reached ")
})

export function FormValidation() {

  const [hide,setHide] = useState(true)
   
  const style={
    type : hide ? "password" : "text"
  }

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
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email} variant="filled" 
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        /> 

        <TextField className='input' 
        name="password"
        id="filled-basic" 
        label="Password" 
        type={style.type}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className='hide' onClick={()=> setHide(!hide) }>
              { hide ? <VisibilityIcon/> : <VisibilityOffIcon/>}
            </InputAdornment>
          ),
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}  variant="filled" 
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
        />
  
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


