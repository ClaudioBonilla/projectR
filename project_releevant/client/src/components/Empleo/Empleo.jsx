import { useFormik } from "formik";
import { Grid, TextField, Typography, Button } from "@mui/material";
import { initialValues } from "./utils/initialValues";
import ComboBox from "../ComboBox/ComboBox";

async function onSubmit(values, actions) {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  actions.resetForm();
}
export default function Empleo() {
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
      <Grid container >
        <Grid item xs={12}>
          <Typography variant="h3"> Publica un empleo </Typography>
        </Grid>

        <Grid item xs={12}>
            <TextField
                label="titulo"
                type="text"
                
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="descripcion"
            type="text"
            
            name="descripcion"
            value={values.descripcion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            </Grid>

     

        <Grid item xs={12}>
          <TextField
            label="salario"
            type="number"
            
            name="salario"
            value={values.salario}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="jornadas"
            type="number"
            
            name="jornadas"
            value={values.jornadas}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="vacantes"
            type="number"
            
            name="vacantes"
            value={values.vacantes}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="direccion"
            type="text"
            
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item xs={12}>
            <ComboBox/>
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
