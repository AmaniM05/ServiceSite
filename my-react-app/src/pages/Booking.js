import React, { useEffect, useRef, useState } from 'react';
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Booking = () => {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [form, setForm] = useState({
    ownerName: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    service: '',
    timeSlot: '',
    specialRequests: ''
  });
  const [services, setServices] = useState([]);
  const [serviceDisabled, setServiceDisabled] = useState(true);

  useEffect(() => {
    const calendar = Flatpickr(calendarRef.current, {
      inline: true,
      minDate: "today",
      maxDate: new Date().fp_incr(30),
      disable: [
        date => (date.getDay() === 0 || date.getDay() === 6)
      ],
      enable: [
        "2025-06-10", "2025-06-11", "2025-06-13",
        "2025-06-17", "2025-06-18", "2025-06-20",
        "2025-06-24", "2025-06-25", "2025-06-27"
      ],
      onChange: (selectedDates) => {
        setSelectedDate(selectedDates[0]);
      }
    });

    return () => calendar.destroy();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handlePetTypeChange = (e) => {
    const petType = e.target.value;
    setForm(prev => ({ ...prev, petType, service: '' }));

    if (petType === 'Cat') {
      setServices([
        { value: 'Full Kitty Spa', label: 'Full Kitty Spa - $65.00' },
        { value: 'A Pawfect Trim', label: 'A Pawfect Trim - $30.00' },
        { value: 'The De-shed Deluxe', label: 'The De-shed Deluxe - $45.00' }
      ]);
      setServiceDisabled(false);
    } else if (petType === 'Dog') {
      setServices([
        { value: 'Full Doggy Spa', label: 'Full Doggy Spa - $65.00' },
        { value: 'Basic Bath & Brush', label: 'Basic Bath & Brush - $45.00' },
        { value: 'The Tail Wag Trim', label: 'The Tail Wag Trim - $30.00' }
      ]);
      setServiceDisabled(false);
    } else {
      setServiceDisabled(true);
    }
  };

  const handleSubmit = () => {
    const { ownerName, email, phone, petName, petType, service, timeSlot } = form;

    if (!ownerName || !email || !phone || !selectedDate || !service || !petName || !petType || !timeSlot) {
      alert('Please fill all required fields!');
      return;
    }

    const formattedDate = selectedDate.toISOString().split('T')[0];
    alert(`Booking confirmed!\n\nOwner: ${ownerName}\nPet: ${petName}\nType: ${petType}\nService: ${service}\nDate: ${formattedDate}\nTime: ${timeSlot}`);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Book an Appointment</h2>
      <Row>
        <Col md={6}>
          <h4>Select a Date</h4>
          <div ref={calendarRef}></div>
          <p className="text-muted mt-2">
            <small>* Available dates are highlighted</small>
          </p>
        </Col>
        <Col md={6}>
          <h4>Appointment Details</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control id="ownerName" value={form.ownerName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control id="email" type="email" value={form.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control id="phone" type="tel" value={form.phone} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control id="petName" value={form.petName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pet Type</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Cat"
                  name="petType"
                  value="Cat"
                  onChange={handlePetTypeChange}
                  checked={form.petType === 'Cat'}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Dog"
                  name="petType"
                  value="Dog"
                  onChange={handlePetTypeChange}
                  checked={form.petType === 'Dog'}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Service</Form.Label>
              <Form.Select
                id="service"
                value={form.service}
                onChange={handleChange}
                disabled={serviceDisabled}
                required
              >
                <option value="">Select a service</option>
                {services.map((s, idx) => (
                  <option key={idx} value={s.value}>{s.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time Slot</Form.Label>
              <Form.Select id="timeSlot" value={form.timeSlot} onChange={handleChange} required>
                <option value="">Select a time</option>
                {["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"].map((time, idx) => (
                  <option key={idx} value={time}>{time}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Special Requests</Form.Label>
              <Form.Control
                as="textarea"
                id="specialRequests"
                rows={3}
                value={form.specialRequests}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>Confirm Booking</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
