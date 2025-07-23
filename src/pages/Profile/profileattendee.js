"use client";

import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import Swal from "sweetalert2";

export default function AttendeesPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [attendees, setAttendees] = useState([
    {
      fullName: "John Doe",
      position: "CTO",
      email: "john@example.com",
      phone: "081234567890",
    },
  ]);

  const [newAttendee, setNewAttendee] = useState({
    fullName: "",
    position: "",
    email: "",
    phone: "",
  });

  const handleAdd = () => {
    const { fullName, position, email, phone } = newAttendee;
    const isEmailValid = email.includes("@");
    const isPhoneValid = /^[0-9]+$/.test(phone);

    if (!fullName || !position || !email || !phone) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please fill out all fields.",
      });
      return;
    }

    if (!isEmailValid || !isPhoneValid) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email or Phone",
        text: "Make sure email contains '@' and phone is numeric only.",
      });
      return;
    }

    if (attendees.length >= 2) {
      Swal.fire({
        icon: "warning",
        title: "Limit Reached",
        text: "Attendees sudah maksimal (2). Hubungi support untuk menambah lebih banyak.",
      });
      return;
    }

    setAttendees([...attendees, newAttendee]);
    setNewAttendee({ fullName: "", position: "", email: "", phone: "" });
    setShowAddModal(false);
  };

  const handleDelete = (index) => {
    const updated = attendees.filter((_, i) => i !== index);
    setAttendees(updated);
  };

  const handleEditChange = (index, field, value) => {
    const updated = [...attendees];
    updated[index][field] = value;
    setAttendees(updated);
  };

  return (
    <>
      <NavbarComponent />
      <Container className="my-5">
        <Row className="align-items-center justify-content-between mb-4">
          <Col xs="auto">
            <Button variant="outline-primary" size="sm" href="/Profile/profile">
              Company Profile
            </Button>
            <Button variant="primary" size="sm" className="ms-2">
              Attendees
            </Button>
          </Col>
          <Col xs="auto" className="text-end">
            <small className="text-muted">Attendees {attendees.length} / 2</small>
          </Col>
        </Row>

        {/* Company Info */}
        <Card className="p-3 mb-4 d-flex flex-row align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="/logo.png"
              alt="Company Logo"
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
              className="me-3"
            />
            <div>
              <h5 className="mb-1">TechCorp Solutions</h5>
              <small className="text-muted">Technology</small>
            </div>
          </div>
          <Button variant="outline-secondary" size="sm">
            Edit
          </Button>
        </Card>

        {/* Attendees Section */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-bold mb-0">Attendees</h5>
          <div>
            <Button
              variant="outline-success"
              size="sm"
              onClick={() => {
                if (attendees.length >= 2) {
                  Swal.fire({
                    icon: "warning",
                    title: "Limit Reached",
                    text: "Attendees sudah maksimal (2). Hubungi support untuk menambah lebih banyak.",
                  });
                } else {
                  setShowAddModal(true);
                }
              }}
            >
              + Add Another Attendee
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className="ms-2"
              onClick={() => setShowEditModal(true)}
            >
              Edit Attendees
            </Button>
          </div>
        </div>

        {attendees.map((att, idx) => (
          <Card key={idx} className="p-3 mb-3 d-flex flex-row justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">{att.fullName}</h6>
              <small className="text-muted">{att.position}</small>
            </div>
            <div className="d-flex gap-2">
              <Button variant="outline-primary" size="sm">
                View QR
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(idx)}>
                <i className="bi bi-trash" />
              </Button>
            </div>
          </Card>
        ))}

        {/* Contact Section */}
        <div className="text-center mt-4 mb-5">
          <p className="text-muted mb-1">Need to add more than 2 attendees?</p>
          <a href="#" className="text-primary fw-semibold text-decoration-none">
            Contact our support team
          </a>
        </div>
      </Container>
      <FooterComponent />

      {/* Modal Add */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Attendee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={newAttendee.fullName}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, fullName: e.target.value })
                }
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                value={newAttendee.position}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, position: e.target.value })
                }
                placeholder="Enter position"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newAttendee.email}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, email: e.target.value })
                }
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={newAttendee.phone}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, phone: e.target.value })
                }
                placeholder="Enter phone number"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Attendee
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Edit */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Attendees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {attendees.map((att, index) => (
            <Card key={index} className="p-3 mb-3">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={att.fullName}
                      onChange={(e) => handleEditChange(index, "fullName", e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      type="text"
                      value={att.position}
                      onChange={(e) => handleEditChange(index, "position", e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={att.email}
                      onChange={(e) => handleEditChange(index, "email", e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      value={att.phone}
                      onChange={(e) => handleEditChange(index, "phone", e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
