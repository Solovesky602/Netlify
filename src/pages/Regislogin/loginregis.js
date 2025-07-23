// pages/login.js
import { Container, Card, Button, Form } from "react-bootstrap";
import Image from "next/image";
// import logo from "../public/event-logo.png"; // Ganti sesuai logo kamu

export default function LoginPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Container>
        <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: "450px" }}>
          <div className="text-center">
            {/* <Image src={logo} alt="Event Logo" width={80} height={80} /> */}
            <h2 className="fw-bold mt-3">Tech Conference 2025</h2>
            <p className="text-muted mt-2" style={{ opacity: 0.8 }}>
              Scan or upload the QR Code we sent to your registration email
            </p>

            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" size="lg" href="/Regislogin/login">
                Scan QR Code
              </Button>
              <span className="text-muted fw-bold">or</span>
              <Button variant="outline-secondary" href="/Regislogin/register">Register</Button>
            </div>

            <p className="mt-4" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Can't use the QR Code? Use the private login link in your email or
              ticket.
            </p>

            <Button
              variant="link"
              className="text-decoration-none text-primary fw-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Contact our support team
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
