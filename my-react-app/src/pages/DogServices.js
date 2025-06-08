import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import dogImage from '../assets/doggroom.png';

const DogServices = () => {
  return (
    <section className="py-5 text-center">
      <Container>
        <h1 className="display-4">Dog Grooming Services</h1>
        <p className="lead">Explore our gentle and professional grooming packages for canine companions!</p>
        <div className="mt-2">
          <img
            src={dogImage}
            alt="dog grooming"
            className="img-fluid mx-auto d-block p-3"
            style={{ maxWidth: '600px' }}
          />
        </div>

        <Row className="g-4 p-3">
          {/* Full Doggy Spa */}
          <Col md={4}>
            <Card className="h-100 text-center p-3 shadow-sm">
              <Card.Body>
                <Card.Title>Full Doggy Spa</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Complete pampering and grooming for dogs who need extra care.
                </Card.Subtitle>
                <Card.Text>
                  <strong>Includes:</strong><br />
                  Bath with dog-safe shampoo<br />
                  Blow dry and brushing<br />
                  Full body trim and shaping<br />
                  Paw pad and nail trim<br />
                  Ear cleaning
                </Card.Text>
                <Button variant="outline-primary">$65.00</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* The Tail Wag Trim */}
          <Col md={4}>
            <Card className="h-100 text-center p-3 shadow-sm">
              <Card.Body>
                <Card.Title>The Tail Wag Trim</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Perfect for active dogs who need essential maintenance.
                </Card.Subtitle>
                <Card.Text>
                  <strong>Includes:</strong><br />
                  Nail trim<br />
                  Paw pad trim<br />
                  Light brushing<br />
                  Ear cleaning
                </Card.Text>
                <Button variant="outline-primary">$30.00</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Basic Bath & Brush */}
          <Col md={4}>
            <Card className="h-100 text-center p-3 shadow-sm">
              <Card.Body>
                <Card.Title>Basic Bath & Brush</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Simple and quick refresh for your dog's coat.
                </Card.Subtitle>
                <Card.Text>
                  <strong>Includes:</strong><br />
                  Bath with dog-safe shampoo<br />
                  Light brushing and drying<br />
                  Nail trim<br />
                  Ear cleaning
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

export default DogServices;
