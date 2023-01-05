
import { useContext } from 'react';
import './App.css';
import About from './components/About/About';
import { Contact } from './components/Contact/Contact';
import Intro from './components/intro/Intro';
import { ProjectList } from './components/ProjectList/ProjectList';
import { Toggle } from './components/Toggle/Toggle';
import { ThemeContext } from './context';


function App() {
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkMode
  return (
    <div style={{ backgroundColor: darkmode ? '#222' : 'white', color: darkmode && 'white' }}>
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
