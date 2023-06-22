import { useState,useEffect } from "react";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button, Checkbox } from "@mui/material";

import { initialValues } from "./utils/initialValues";
import { RegisterFormikSchema } from "./RegisterFormikSchema";

async function onSubmit(values, actions) {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  actions.resetForm();
}



const label = { inputProps: { "aria-label": "¿Eres empresario?" } };

export default function RegisterFormik() {
  const [click, setClick] = useState(false);
  const [data, setData] = useState(null)

  console.log(data);
  
  const handleCheckBox = () => {
    setClick(!click);
  };

  useEffect(() =>{
     fetch("localhost:3001/user/register",  {method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, body: JSON.stringify(values)
  })
    .then(response => response.json())
    .then(data => setData(values))
  },[])

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: RegisterFormikSchema,
    onSubmit: async (values, actions) => {
      console.log(values);
      await fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      actions.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3"> Registrate </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="nombre"
            type="text"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.nombre && touched.nombre ? "input-error" : ""}
          />
          {errors.nombre && touched.nombre && (
            <p className="error">{errors.nombre}</p>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="contraseña"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="confirmar contraseña"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="telefono"
            type="number"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.telefono && touched.telefono ? "input-error" : ""}
          />
          {errors.telefono && touched.telofono && (
            <p className="error">{errors.telefono}</p>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="direccion"
            type="text"
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.direccion && touched.direccion ? "input-error" : ""
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Checkbox
            color="danger"
            {...label}
            checked={click}
            onChange={handleCheckBox}
          />
          <Typography>¿Eres Empresario?</Typography>
        </Grid>

        {click && (
          <Grid item xs={12}>
            <TextField
            type="text"
            name="cif"
              value={values.cif}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Introduce tu C.I.F"
              className={
              errors.direccion && touched.direccion ? "input-error" : ""
            }
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
