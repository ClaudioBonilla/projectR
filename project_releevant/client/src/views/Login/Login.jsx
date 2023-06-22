import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";



export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleSubmit(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
console.log(email);
console.log(password);
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3"> LOGIN </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="email"
            type="email"
            fullWidth
            name="email"
            value={email}
            onChange={handleSubmit}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="contraseña"
            type="password"
            fullWidth
            name="password"
            value={password}
            onChange={handleSubmit}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
