import { db } from '../config/Firebase';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import './Reservas.css';

const Reservas = () => {
  const valorInicial = {
    name: '',
    email: '',
    fecha: '',
    comensales: '',
  };

  // Variables de estados

  const [user, setUser] = useState(valorInicial);

  // funciones controladoras del form

  const catchInputs = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const reservarMesa = async (e) => {
    e.preventDefault();

    try {
      const collectionRef = collection(db, 'Reservas');
      await addDoc(collectionRef, {
        ...user,
      });
    } catch (error) {
      console.log(error);
    }

    setUser({ ...valorInicial });
  };

  return (
    <div>
      <div>
        <h2 className='text-center mb-4'>Reservas</h2>
        {/* Formulario */}
        <div className='reservas--container'>
          <form onSubmit={reservarMesa}>
            <div>
              <div>
                <input
                  type='text'
                  name='name'
                  className='form-control mb-3'
                  placeholder='Ingresa tu nombre'
                  onChange={catchInputs}
                  value={user.name}
                />
                <input
                  type='text'
                  name='email'
                  className='form-control mb-3'
                  placeholder='Ingresa tu correo'
                  onChange={catchInputs}
                  value={user.email}
                />
                <input
                  type='text'
                  name='fecha'
                  className='form-control mb-3'
                  placeholder='Dia-Mes-Año'
                  onChange={catchInputs}
                  value={user.fecha}
                />
                <input
                  type='number'
                  name='comensales'
                  className='form-control mb-3'
                  placeholder='Indica N° de comensales'
                  onChange={catchInputs}
                  value={user.comensales}
                />
              </div>
              <button className='btn btn-primary'>Reservar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservas;
