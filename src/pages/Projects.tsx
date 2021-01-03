import Navbar from '../components/Navbar';
import '../styles/pages/projects.css';

import ColetaAmiga from '../components/Projects/ColetaAmiga';
import PersonalPage from '../components/Projects/PersonalPage';

import { useState } from 'react';

function Projects() {
  const [coletaAmigaIsVisible, setCAIsVisible] = useState(false);
  const [minhaPáginaIsVisible, setMPIsVisible] = useState(false);

  function SwapProject(project: number) {
    const array = [setCAIsVisible, setMPIsVisible];

    array.forEach(element => {
      element(false);
    })

    array[project](true);
  }
  return (
    <>
      <Navbar />

      <div id="projects-page">
        <h1>Projetos</h1>

        <div className="projects-list">
          <button onClick={ () => {SwapProject(0)}}>Coleta Amiga</button>
          <button onClick={ () => {SwapProject(1)}}>Personal Page</button>
        </div>
        
        {coletaAmigaIsVisible &&
          <ColetaAmiga />
        }

        {minhaPáginaIsVisible &&
          <PersonalPage />
        }
       
      </div>
    </>
  );
}

export default Projects;