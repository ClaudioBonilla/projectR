import {useState,useEffect} from "react"
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button } from "@mui/material";
import { initialValues } from "./utils/initialValues";

async function onSubmit(values, actions) {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  actions.resetForm();

  // if (values.email === "topuria@ufc.com" && values.password === "elmatador") {
  //   console.log("login correcto");
  // } else {
  //   console.log("login incorrecto");
  // }
}

export default function LoginFormik() {
  const [data, setData] = useState("")

  useEffect(() =>{
    fetch("localhost:3001/user/login",  {method: "GET",
   headers: {
     "Content-Type": "application/json",
   }, body: JSON.stringify(values)
 })
   .then(response => response.json())
   .then(data => setData(values))
 },[])


  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    onSubmit,
  initialValues
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h3">Accede a tu usuario</Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="contraseña"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
