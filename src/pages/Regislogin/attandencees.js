"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { Trash } from "react-bootstrap-icons";

export default function ConfirmAttendancePage() {
  const router = useRouter();

  const [attendees, setAttendees] = useState([
    { fullName: "", position: "", email: "", phone: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...attendees];
    updated[index][field] = value;
    setAttendees(updated);
  };

  const handleAddAttendee = () => {
    if (attendees.length < 2) {
      setAttendees([
        ...attendees,
        { fullName: "", position: "", email: "", phone: "" },
      ]);
    }
  };

  const handleRemoveAttendee = (index) => {
    const updated = attendees.filter((_, i) => i !== index);
    setAttendees(updated);
  };

  const handleSubmit = () => {
    for (let i = 0; i < attendees.length; i++) {
      const { fullName, position, email, phone } = attendees[i];

      if (!fullName || !position || !email || !phone) {
        Swal.fire({
          icon: "error",
          title: "Incomplete",
          text: `Please fill out all required fields for Attendee ${i + 1}.`,
        });
        return;
      }

      if (!email.includes("@")) {
        Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: `Email for Attendee ${i + 1} must contain '@'.`,
        });
        return;
      }

      if (!/^\d+$/.test(phone)) {
        Swal.fire({
          icon: "error",
          title: "Invalid Phone Number",
          text: `Phone number for Attendee ${i + 1} must only contain digits.`,
        });
        return;
      }
    }

    // Semua validasi lolos
    Swal.fire({
      icon: "success",
      title: "Attendance Confirmed",
      text: "Thank you for confirming. See you at the event!",
      confirmButtonText: "Back to Home",
    }).then(() => {
      router.push("/Home"); // Kembali ke home setelah submit
    });
  };

  return (
    <Container className="my-5">
      {/* Event Logo & Title */}
      <div className="text-center mb-4">
        <img src="/logo.png" alt="Event Logo" style={{ height: "100px" }} />
        <h1 className="fw-bold mt-3">Tech Conference 2023</h1>
      </div>

      <Card className="p-4 shadow-sm">
        <div className="text-center mb-4">
          <h2>Confirm Attendance</h2>
          <p className="text-muted">You may add up to 2 attendees</p>
          <p className="fw-bold">Attendees added: {attendees.length} / 2</p>
        </div>

        {attendees.map((attendee, index) => (
          <div
            key={index}
            className="mb-4 p-3 border rounded position-relative"
          >
            <h5>
              Attendee {index + 1}{" "}
              {index === 1 && (
                <Trash
                  className="position-absolute top-0 end-0 m-3 text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemoveAttendee(index)}
                />
              )}
            </h5>
            <Row className="mb-2">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Full Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={attendee.fullName}
                    onChange={(e) =>
                      handleChange(index, "fullName", e.target.value)
                    }
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Position <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={attendee.position}
                    onChange={(e) =>
                      handleChange(index, "position", e.target.value)
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={attendee.email}
                    onChange={(e) =>
                      handleChange(index, "email", e.target.value)
                    }
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Phone Number <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    value={attendee.phone}
                    onChange={(e) =>
                      handleChange(index, "phone", e.target.value)
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        ))}

        {/* Add Another Attendee Button */}
        {attendees.length < 2 && (
          <div className="text-center mb-3">
            <Button variant="outline-primary" onClick={handleAddAttendee}>
              + Add Another Attendee
            </Button>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <Button variant="primary" onClick={handleSubmit}>
            Confirm Attendee
          </Button>
        </div>

        {/* Contact Link */}
        <div className="text-end mt-4">
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            Need to add more than 2 attendees? <a href="#">Contact our team</a>
          </p>
        </div>
      </Card>
    </Container>
  );
}
