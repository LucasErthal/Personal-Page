import '../../styles/components/projects/quantuminvestimentos.css'

import MonthlyScreen from '../../assets/gifs/MonthlyScreen.gif';
import CompoundScreen from '../../assets/gifs/CompoundScreen.gif';
import FormScreen from '../../assets/gifs/FormScreen.gif';

const QuantumInvestimentos: React.FC = () => {
  return (
    <div id="quantum-page">
      <h2>Quantum Investimentos</h2>

      <p>
        Aplicativo simples e prático de investimentos pessoais, consiste em duas calculadoras,
        uma de retorno mensal em porcentagem, outra de crescimento "exponencial" para investimentos anuais,
        além de um formulário simples para emissão dos dados em png.
      </p>


      <img src={MonthlyScreen} alt="" />

      <p>O projeto foi feito em React Native utilizando Typescript</p>

      <img src={CompoundScreen} alt="" />

      <img src={FormScreen} alt="" />

      <h3>O código deste projeto não está disponível para visualização.</h3>
    </div>
  );
}

export default QuantumInvestimentos;