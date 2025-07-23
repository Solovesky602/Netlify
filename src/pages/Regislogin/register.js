import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const router = useRouter();


  const companyOptions = [
    "Tokopedia", "Gojek", "Pertamina", "Telkom Indonesia", "BNI",
    "Mandiri", "Traveloka", "Bukalapak", "BCA", "Grab"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi manual
    if (!selectedRole || !company || !email || !agree) {
      Swal.fire({
        icon: "error",
        title: "Pendaftaran Gagal",
        text: "Semua field wajib diisi dan syarat harus disetujui.",
      });
      return;
    }

    if (!email.includes("@")) {
      Swal.fire({
        icon: "warning",
        title: "Email Tidak Valid",
        text: "Silakan masukkan email yang benar.",
      });
      return;
    }

    // Jika semua valid
    Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil",
        text: "Silakan cek email kamu untuk informasi lebih lanjut.",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/Regislogin/verify");
        }
    });

    // Reset form (opsional)
    setSelectedRole("");
    setCompany("");
    setEmail("");
    setAgree(false);
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card style={{ maxWidth: "600px", width: "100%" }} className="shadow">
        <Card.Body className="p-4">
          {/* Logo + Judul */}
          <div className="text-center mb-4">
            <div
              style={{
                width: 80,
                height: 80,
                background: "#eee",
                margin: "0 auto",
                borderRadius: "50%",
              }}
            ></div>
            <h3 className="mt-3 fw-bold">Event App</h3>
            <p className="text-muted">Register for the event</p>
          </div>

          {/* Detail Acara */}
          <div className="mb-4 text-center">
            <h5>Tech Conference 2023</h5>
            <p className="text-muted mb-1">📅 April 15–17, 2023</p>
            <p className="text-muted mb-2">📍 Jakarta Convention Center</p>
            <p className="text-muted" style={{ fontSize: "0.85rem" }}>
              Please fill in the information below to complete your registration.
            </p>
          </div>

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>I am registering as:</Form.Label>
              <div className="d-flex flex-wrap gap-3">
                {["Startup", "BUMN", "Invitation"].map((role) => (
                  <Form.Check
                    key={role}
                    type="radio"
                    name="role"
                    label={role}
                    id={`role-${role}`}
                    value={role}
                    checked={selectedRole === role}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option value="">Select your company</option>
                {companyOptions.map((comp, idx) => (
                  <option key={idx} value={comp}>
                    {comp}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Check
                type="checkbox"
                label="I agree to the terms and conditions"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Register
            </Button>

            <p
              className="text-center text-muted"
              style={{ fontSize: "0.85rem" }}
            >
              Having trouble registering?{" "}
              <a href="#">Contact our support team</a>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
