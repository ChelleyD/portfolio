import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DrawerAppBar from './components/DrawerAppBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {main: '#A683D7'
    },
    text: {
      secondary: '#ffffff'
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DrawerAppBar/>
        <Hero/>
        <Projects/>
      </div>
    </ThemeProvider>
  );
}

export default App;
