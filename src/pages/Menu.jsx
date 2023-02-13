import { useState, useEffect } from 'react';
import { db } from '../config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Card, Button, Col, Row } from 'react-bootstrap';

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
    <div className='container--menu'>
      <h1>Menu</h1>
      <Row xs={1} md={3} className='g-4'>
        {menu.map((plato) => (
          <Col>
            <Card
              className='card d-flex flex-column'
              key={plato.id}
              style={{ width: '18rem' }}
            >
              <Card.Img variant='top' src={plato.image} />
              <Card.Body className='d-flex flex-column justify-content-end align-items-center'>
                <Card.Title>{plato.name}</Card.Title>
                <Card.Text>{plato.description}</Card.Text>
                <Button variant='primary' href='#' target='_blank'>
                  {plato.price}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Menu;
