import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from './theme/theme'
import {AppBar, Toolbar} from "@material-ui/core";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="fixed">
            <Toolbar>{/*content*/}</Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
  );
}

export default App;
