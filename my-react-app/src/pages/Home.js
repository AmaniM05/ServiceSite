import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import petsImg from "../assets/pets.png";
import dogCatImg from "../assets/dogcat.jpg";
import dogImg from "../assets/dog.png";
import catImg from "../assets/cat.png";
import { Link as ScrollLink, Element } from "react-scroll";


function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-light py-5 text-center">
        <Container>
          <h1 className="display-4">Pamper Your Pet</h1>
          <p className="lead">We offer professional grooming services with love and care!</p>
          <div className="mt-4">
            <img
              src={petsImg}
              alt="pets"
              className="img-fluid mx-auto d-block"
              style={{ maxWidth: "750px" }}
            />
          </div>
          <ScrollLink to="about" smooth={true} duration={500}>
            <Button
              size="lg"
              className="mt-4"
            >
              Learn More!
            </Button>
          </ScrollLink>

        </Container>
      </header>

      {/* About Section */}
      <Element name = "About">
        <section id="about" className="py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <h2>Welcome to PetsGrooming.Co!</h2>
                <h5 className="mt-4">
                  We're a team of certified pet groomers who believe grooming should be a positive experience for your furry friends. Our salon uses only the safest, most gentle products.
                </h5>
                <h5 className="mt-3">
                  We guarantee to provide a safe and comfortable grooming experience for your beloved pets! We offer grooming services for both cats and dogs, ranging from nail trims to full treatment packages.
                </h5>

                <ScrollLink to="services" smooth={true} duration={500}>
                  <Button variant="primary">View Services</Button>
                </ScrollLink>

              </Col>
              <Col lg={6}>
                <img
                  src={dogCatImg}
                  alt="Groomer with dog"
                  className="img-fluid rounded"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </Element>

      {/* Services Section */}
      <Element name = "services">
        <section id="services" className="py-5" >
          <Container>
            <h2 className="text-center mb-5">Select a Pet to View Services!</h2>
            <Row className="justify-content-center g-4">
              <Col md={5}>
                <Card className="text-center p-4 h-100">
                  <Card.Title className="mb-3">Dog Grooming</Card.Title>
                  <div className="mb-3">
                    <Link to="/dogservices">
                      <img
                        src={dogImg}
                        alt="Dog Services"
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <Button as={Link} to="/dogservices" variant="outline-primary" className="mt-auto">
                    Explore Dog Grooming Packages
                  </Button>
                </Card>
              </Col>
              <Col md={5}>
                <Card className="text-center p-4 h-100">
                  <Card.Title className="mb-3">Cat Grooming</Card.Title>
                  <div className="mb-3">
                    <Link to="/catservices">
                      <img
                        src={catImg}
                        alt="Cat Services"
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <Button as={Link} to="/catservices" variant="outline-primary" className="mt-auto">
                    Explore Cat Grooming Packages
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Element>

    </div>
  );
}

export default Home;
