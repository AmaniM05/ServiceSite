import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="p-4 border rounded">
              <h3><i className="fas fa-map-marker-alt me-2"></i>Visit Us</h3>
              <p>123 Petal Street, Blossomville</p>
              <h3><i className="fas fa-phone me-2"></i>Call Us</h3>
              <p>(555) 123-4567</p>
              <h3><i className="fas fa-envelope me-2"></i>Email Us</h3>
              <p>Bookings@PetsGrooming.Co.com</p>
              <h3><i className="fas fa-clock me-2"></i>Hours</h3>
              <p>Mon-Sat 9am-5pm</p>
              <div className="social-icons mt-4">
                <a href="#" className="me-3 text-dark"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="me-3 text-dark"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 border rounded">
              <h3>Send a Message</h3>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Pet's Name & Breed" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="3" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
