import './App.css';
import DrawerAppBar from './components/DrawerAppBar';
import Hero from './components/Hero';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <DrawerAppBar/>
      <Hero/>
    </div>
  );
}

export default App;
