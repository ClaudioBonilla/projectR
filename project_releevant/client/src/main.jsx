import { createRoot } from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#5C8D3A"
    },
    secondary: {
      main: "#767F0E"
    },
    danger:{
      main: "#22ED14"
    }
  }
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
