import { Container, Row, Col } from "react-bootstrap";

export default function DetailSection() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Kolom kiri: Logo / gambar */}
        <Col md={4} className="text-center">
          <img
            src="/images/event-logo.png" // Ganti dengan path logo kamu
            alt="Event Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>

        {/* Garis pemisah vertikal */}
        <Col
          md={1}
          className="d-none d-md-flex justify-content-center"
          style={{ borderRight: "2px solid #ccc", height: "150px" }}
        ></Col>

        {/* Kolom kanan: Judul + detail event */}
        <Col md={7}>
          <h2 className="fw-bold">Tech Conference 2023</h2>
          <p>
            Tech Conference 2023 adalah acara tahunan terbesar yang mengumpulkan
            para profesional teknologi dari seluruh Indonesia dan dunia.
            Acara ini menghadirkan pembicara ternama, sesi workshop,
            networking, serta pameran inovasi teknologi terbaru.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
