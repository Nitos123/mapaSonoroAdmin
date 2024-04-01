
import Header from './HeaderBackoffice';
import ControlPanel from './ControlPanel';
import { useNavigate } from 'react-router-dom';
import iconVideo from './assets/video.svg';
import iconAudio from './assets/audio.svg';
import iconImg from './assets/img.svg';
import iconShare from './assets/compartir.svg';

function ModuloMulti() {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user ? user.username : '';
  const navigate = useNavigate();

  const multimedia = [
    { nombreES: 'Nombre Multimedia Español', nombreEN: 'Name Multimedia English', type: 'video' },
    { nombreES: 'Nombre Multimedia Español', nombreEN: 'Name Multimedia English', type: 'img' },
    { nombreES: 'Nombre Multimedia Español', nombreEN: 'Name Multimedia English', type: 'audio' },

  ];

  return (
    <div className="dashboard">
      <Header username={username} />
      <ControlPanel />
      <div className="main-content">
      <button className='close-ses'>+ Agregar multimedia</button>
      <table className='table-users'>
          <thead>
            <tr className='table-titles' border="1">
              <th>Nombre ES</th>
              <th>Nombre EN</th>
              <th>Tipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {multimedia.map((item, index) => (
               <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#FAF8F8' : '#FFFFFF' }}>
                <td>{item.nombreES}</td>
                <td>{item.nombreEN}</td>
                <td>
  <img 
    src={
      item.type === 'video' ? iconVideo :
      item.type === 'audio' ? iconAudio :
      item.type === 'img' ? iconImg :
      null
    } 
    alt={item.type}
  />
</td>
                <td>
                <img src={iconShare} alt="Compartir" />
                  <button className='table-btn' onClick={() => navigate('/editar-usuario')}>Editar</button>
                  <button className='table-btn'>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
    </div>
  );
}

export default ModuloMulti;