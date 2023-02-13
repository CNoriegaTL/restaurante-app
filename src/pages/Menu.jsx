import { useState, useEffect } from 'react';
import { db } from '../config/Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, 'Menu');
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });

        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getMenu();
  }, []);

  console.log(menu);

  return (
    <div>
      <h1 className='text-center'>Menu</h1>
      <div>
        {menu.map((plato) => (
          <div key={plato.id}>
            <div>
              <img src={plato.image} alt={plato.name} />
              <h2>{plato.name}</h2>
              <p>{plato.description}</p>
              <button>Precio: ${plato.price}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
