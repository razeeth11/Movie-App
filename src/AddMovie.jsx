import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Call } from "@mui/icons-material";
import { API } from './api';

export function AddMovie() {
  const navigate = useNavigate();

  const addMovieValidate = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().url(),
    rating: yup.number().required().max(10),
    summary: yup.string().required(),
    trailer: yup.string().required().url(),
  });

  const radius = {
    borderRadius: "0px",
    minHeight: "100vh",
  };

  const click = async (newMovie) => {
    await fetch(
      `${API}/movies`,
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      },
      []
    );
    navigate("/movies");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: addMovieValidate,
    onSubmit: (values) => click(values),
  });

  return (
    <Paper sx={radius} elevation={10}>
      <div className="main">
        <form onSubmit={formik.handleSubmit}>
          <div className="contain">
            <h2>Add Movie Here</h2>

            <TextField
              name="name"
              className="input"
              type="text"
              label="Movie Name"
              variant="filled"
              error={formik.errors.name && formik.touched.name}
              helperText={
                formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : null
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            <TextField
              name="poster"
              className="input"
              type="text"
              label="Poster"
              variant="filled"
              error={formik.errors.poster && formik.touched.poster}
              helperText={
                formik.errors.poster && formik.touched.poster
                  ? formik.errors.poster
                  : null
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            <TextField
              name="rating"
              className="input"
              type="text"
              label="Rating"
              variant="filled"
              error={formik.errors.rating && formik.touched.rating}
              helperText={
                formik.errors.rating && formik.touched.rating
                  ? formik.errors.rating
                  : null
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            <TextField
              name="summary"
              className="input"
              type="text"
              label="Summary"
              variant="filled"
              error={formik.errors.summary && formik.touched.summary}
              helperText={
                formik.errors.summary && formik.touched.summary
                  ? formik.errors.summary
                  : null
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            <TextField
              name="trailer"
              className="input"
              type="text"
              label="Trailer"
              variant="filled"
              error={formik.errors.trailer && formik.touched.trailer}
              helperText={
                formik.errors.trailer && formik.touched.trailer
                  ? formik.errors.trailer
                  : null
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {formik.values.name != "" &&
            formik.values.poster != "" &&
            formik.values.summary != "" &&
            formik.values.rating != "" &&
            formik.values.trailer != "" ? (
              <Button type="submit" className="add-Button" variant="contained">
                Add Movie
              </Button>
            ) : (
              <Button variant="contained" color="primary" disabled>
                Enter the details to enable button
              </Button>
            )}
          </div>
        </form>
      </div>
    </Paper>
  );
}
