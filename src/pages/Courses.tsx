import Navbar from '../components/Navbar';

import BDCERTImage from '../assets/images/Dominando Banco de Dados CERT.png'
import WDCERTImage from '../assets/images/Web Design CERT.png';
import UCERTImage from '../assets/images/Unity CERT.png';
import CBAImage from '../assets/images/CSharp Basico Avancado CERT.png';
import CCImage from '../assets/images/CSharp CRUD CERT.png';
import CMVCImage from '../assets/images/CSharp Com MVC CERT.png';

import '../styles/pages/courses.css'
import Course from '../components/Course';

function Courses() {
  return (
    <>
      <Navbar />

      <div id="courses-page">
        <h1>Cursos & Outros</h1>

        <Course 
          name='Dominando Banco de Dados com MySQL'
          author='Hcode Treinamentos'
          platform='Udemy.com'
          hours='4 horas'
          date='14 de Outubro de 2019'
          image={BDCERTImage}
        />

        <Course 
          name='Next Level Week #2'
          author='Rocketseat'
          platform='rocketseat.com.br'
          hours='Aproximadamente 10 horas'
          date='7 de Agosto de 2020'
        />

        <Course 
          name='Next Level Week #3'
          author='Rocketseat'
          platform='rocketseat.com.br'
          hours='Aproximadamente 10 horas'
          date='15 de Outubro de 2020'
        />

        <Course 
          name='Web Design com Adobe XD, Bootstrap, GIMP, HTML e Photoshop'
          author='Alfahelix Treinamentos'
          platform='Udemy.com'
          hours='13,5 horas'
          date='6 de Junho de 2020'
          image={WDCERTImage}
        />

        <Course 
          name='O Guia Definitivo para Desenvolvimento de Jogos com Unity'
          author='Unity Technologies'
          platform='Udemy.com'
          hours='13 horas'
          date='28 de Março de 2020'
          image={UCERTImage}
        />

        <Course 
          name='C# Curso Completo: Do Básico ao Avançado!'
          author='COD3R Cursos Online'
          platform='Udemy.com'
          hours='16,5 horas'
          date='10 de Outubro de 2019'
          image={CBAImage}
        />

        <Course 
          name='ASP NET(C#) - Programação em Camadas - CRUD'
          author='Filipe Tório Lopes Ruas Nhimi'
          platform='Udemy.com'
          hours='2,5 horas'
          date='18 de Outubro de 2019'
          image={CCImage}
        />

        <Course 
          name='ASP NET C# com MVC5'
          author='Hugo Vasconcelos'
          platform='Udemy.com'
          hours='5,5 horas'
          date='22 de Dezembro de 2019'
          image={CMVCImage}
        />
      </div>
    </>
  );
}

export default Courses;