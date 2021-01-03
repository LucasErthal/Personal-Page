import Navbar from '../components/Navbar';
import '../styles/pages/aboutme.css'

function AboutMe() {
  return (
    <>
      <Navbar />

      <div id="aboutme-page">
        <h1>Sobre mim</h1>
        <div className="basic-info">
          <h2>Informações básicas</h2>
          <p>Formação: Análise e Desenvolvimento de Sistemas</p>
          <p>Instituição: Universidade Estácio de Sá</p>
          <p>Localidade: São Gonçalo - Rio de Janeiro</p>
          <p>Data de Nascimento: 25/11/1997</p>
          <p>Whatsapp: (21) 98848-1631</p>
        </div>

        <div className="info">
          <h2>Como cheguei até aqui?</h2>
          <p>
            Comecei a estudar programação seriamente em meados de 2019,
            quando consegui um estágio de desenvolvimento em C# .NET(Windows Forms)
            com MySQL em um mercado pequeno da minha região.
        </p>

          <p>
            Quando o projeto do estágio terminou, tive interesse
            em aprender desenvolvimento web e mobile,
            começando por estudar por cursos como HTML
            e CSS+Bootstrap(Web Design com Adobe XD, Bootstrap, GIMP, HTML e Photoshop,
            por Diego Mariano, Udemy.com) e mobile com React Native(React Native:
            Desenvolva APPs Nativas para Android e iOS por Leonardo Moura Leitao, Udemy.com).
        </p>

          <p>
            Até que recebi o anúncio do evento Next Level Week #2, feito pela Rocketseat,
            onde foi ensinado a criar uma aplicação do zero utilizando Typescript. O projeto
            proposto nesse evento foi o Proffy, uma plataforma simples de conexão entre alunos e
            professores, utilizando SQLite3 em ambiente de desenvolvimento e PostgreSQL em publicação.
        </p>

          <p>
            Com base no que aprendi nesse evento, trabalhei como freelancer no desenvolvimento de uma aplicação
            para TCC utilizando React Native chamada Coleta Amiga, que consistia em facilitar o acesso de pessoas
            á locais de reciclagem, com cadastro de usuários e empresas, e exibindo a localidade e rota para os locais no maps
            utilizando google API.
        </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;