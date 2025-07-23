"use client";

import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { useState } from "react";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("company");

  return (
    <>
      <NavbarComponent />

      <Container className="my-4 pb-5">
        {/* Section Toggle */}
        <div className="d-flex justify-content-center mb-4 gap-3">
          <Button
            variant={activeSection === "company" ? "primary" : "outline-primary"}
            onClick={() => setActiveSection("company")}
          >
            Company Profile
          </Button>
          <Button
            variant={activeSection === "attendees" ? "primary" : "outline-primary"}
            onClick={() => setActiveSection("attendees")}
            href="/Profile/profileattendee"
          >
            Attendees
          </Button>
        </div>

        {/* Header Info */}
        <Row className="align-items-center mb-4">
          <Col xs={4} md={2}>
            <Image src="/logo.png" fluid rounded />
          </Col>
          <Col xs={8} md={8}>
            <h4 className="fw-bold">Nama Perusahaan</h4>
            <p className="text-muted mb-0">Bidang Industri</p>
          </Col>
          <Col xs={12} md={2} className="text-md-end mt-3 mt-md-0">
            <Button variant="outline-secondary" size="sm" disabled>
              Edit
            </Button>
          </Col>
        </Row>

        {/* Social Media (Placeholder Buttons) */}
        <div className="d-flex flex-wrap gap-2 justify-content-start mb-4">
          <Button variant="outline-primary" size="sm">Instagram</Button>
          <Button variant="outline-primary" size="sm">LinkedIn</Button>
          <Button variant="outline-primary" size="sm">Website</Button>
          {/* Tambah sesuai kebutuhan */}
        </div>

        {/* About Company */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>About Company</Card.Title>
            <Card.Text>
              Ini adalah deskripsi singkat mengenai perusahaan. Bisa panjang, bisa pendek,
              tergantung apa yang ingin disampaikan.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Company Image */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Company Activities Image</Card.Title>
            <Image src="/placeholder-image.jpg" fluid rounded className="mt-2" />
          </Card.Body>
        </Card>

        {/* Company Video */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Company Video</Card.Title>
            <div className="ratio ratio-16x9 mt-2">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Company Video"
                allowFullScreen
              ></iframe>
            </div>
          </Card.Body>
        </Card>

        {/* Company Document */}
        <Card className="mb-5">
          <Card.Body>
            <Card.Title>Company Document</Card.Title>
            <p className="mt-2">Download: <a href="#">Company_Profile.pdf</a></p>
          </Card.Body>
        </Card>
      </Container>

      <FooterComponent />
    </>
  );
}
