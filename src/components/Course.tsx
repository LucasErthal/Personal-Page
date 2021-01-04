import { useState } from 'react';
import '../styles/components/course.css'

interface CourseProps {
  name: string
  author: string
  platform: string
  hours: string
  date: string
  image?: string
}

const Course: React.FC<CourseProps> = ({ name, author, platform, hours, date, image }) => {
  const [isCertificateVisible, setIsCertificateVisible] = useState(false);

  function ShowHideCertificate() {
    setIsCertificateVisible(!isCertificateVisible);
  }

  return (
    <div id="course">
      <p>Nome: {name}</p>
      <p>Autor: {author}</p>
      <p>Plataforma: {platform}</p>
      <p>Carga horária: {hours}</p>
      <p>Data de conclusão: {date}</p>

      <button 
        onClick={ShowHideCertificate}
        disabled={image? false : true}
        style={{ backgroundColor: image? '#506BC2' : 'grey' }}
      >
        Visualizar Certificado
      </button>

      {isCertificateVisible &&
        <img src={image} alt="" />     
      }
    </div>
  );
}

export default Course;