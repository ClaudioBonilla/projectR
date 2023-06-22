import { useState } from 'react';
import { useFormik } from 'formik';
import { Checkbox, Typography, Grid, TextField } from "@mui/material"

const label = { inputProps: { 'aria-label': '¿Eres empresario?' } }

export default function CheckBoxInput() {
  const initialValues = {cif: ""}
  const [click, setClick] = useState(false)

  const handleChange = () => {
    setClick(!click);
  }


async function onSubmit(values, actions){
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    actions.resetForm();
  };

  const {
    handleSubmit,
    values
  } = useFormik({
    initialValues,
    onSubmit
  });




  return (
    <form onSubmit={handleSubmit}>
    <Grid container>
      <Grid item xs={12}>
        <Checkbox color='danger' {...label} checked={click} onChange={handleChange} />
        <Typography>¿Eres Empresario?</Typography>
      </Grid>

      {click && (
        <Grid item xs={12}>
          <TextField value={values.cif} label="Introduce tu C.I.F" />
        </Grid>
      )}
    </Grid>
    </form>
  )
}
