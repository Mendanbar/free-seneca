import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './Components/Header'
import Navigation from './Components/Navigation';

import Home from './Pages/Home'
import Character from './Pages/Character'
import Pictures from './Pages/Pictures';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: blue,
  },
  typography: {
    fontSize: 14
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/pictures" element={<Pictures />} />
        </Routes>
        <Navigation/>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
