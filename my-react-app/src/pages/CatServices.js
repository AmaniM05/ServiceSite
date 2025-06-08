import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import catImage from '../assets/catgroom.png';

const CatServices = () => {
  return (
    <section className="py-5 text-center">
      <Container>
        <h1 className="display-4">Cat Grooming Services</h1>
        <p className="lead">Explore our gentle and professional grooming packages for feline friends!</p>
        <div className="mt-2">
          <img
            src={catImage}
            alt="cat grooming"
            className="img-fluid mx-auto d-block p-3"
            style={{ maxWidth: '600px' }}
          />
        </div>

        <Row className="g-4 p-3">
          {/* Full Kitty Spa */}
          <Col md={4}>
            <Card className="h-100 text-center p-3 shadow-sm">
              <Card.Body>
                <Card.Title>Full Kitty Spa</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  A full service grooming package for cats that need extra care.
                </Card.Subtitle>
                <Card.Text>
                  <strong>Includes:</strong><br />
                  Bath with cat-safe shampoo<br />
                  Blow dry and brushing<br />
                  Sanitary trim<br />
                  Paw pad trim<br />
                  Nail trim<br />
                  Ear cleaning
                </Card.Text>
                <Button variant="outline-primary">$65.00</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* A Pawfect Trim */}
          <Col md={4}>
            <Card className="h-100 text-center p-3 shadow-sm">
              <Card.Body>
                <Card.Title>A Pawfect Trim</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Ideal for indoor cats that tend to scratch and slip.
                </Card.Subtitle>
                <Card.Text>
                  <strong>Includes:</strong><br />
                  Nail trim<br />
                  Paw pad trim<br />
                  Light brushing
                </Card.Text>
                <Button variant="outline-primary">$30.00</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* The De-shed Deluxe */}
          <Col md={4}>
            <Card className="h-100 text-center p-3 shadow-sm">
              <Card.Body>
                <Card.Title>The De-shed Deluxe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Great for long-haired cats or heavy shedders.
                </Card.Subtitle>
                <Card.Text>
                  <strong>Includes:</strong><br />
                  Full de-shedding treatment<br />
                  Undercoat brushing<br />
                  Anti-shed spray
                </Card.Text>
                <Button variant="outline-primary">$45.00</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Services Card */}
        <Card className="p-4 col-12 col-lg-10 mx-auto mt-4 shadow-sm">
          <Card.Body>
            <Card.Title>Additional Services</Card.Title>
            <Card.Text>
              <strong>These add-ons can be booked with any package!</strong><br /><br />
              Flea Treatment: +$15<br />
              Teeth Brushing: +$10<br />
              De-matting (Severe): +$25+<br />
              Tangle Removal (Mild Matting): +$10-$25
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default CatServices;
