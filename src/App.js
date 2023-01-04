
import './App.css';
import About from './components/About/About';
import { Contact } from './components/Contact/Contact';
import Intro from './components/intro/Intro';
import { ProjectList } from './components/ProjectList/ProjectList';


function App() {
  return (
    <>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </>
  );
}

export default App;
