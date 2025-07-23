"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();
  const [qrUploaded, setQrUploaded] = useState(null);

  const handleUploadQR = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setQrUploaded(URL.createObjectURL(file));

      Swal.fire({
        icon: "success",
        title: "QR Code Valid!",
        text: "Selamat datang di Tech Conference 2025!",
        confirmButtonText: "Lanjut ke Home",
      }).then(() => {
        router.push("/Home");
      });
    }
  };

  const handleScanQR = () => {
    // Placeholder: nanti ganti dengan QR scanner asli
    Swal.fire({
      icon: "success",
      title: "QR Code Valid!",
      text: "Selamat datang di Tech Conference 2025!",
      confirmButtonText: "Lanjut ke Home",
    }).then(() => {
      router.push("/Home");
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Container>
        <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <div className="text-center">
            <h2 className="fw-bold">Upload or Scan Your QR Code</h2>
            <p className="text-muted mb-4">
              Gunakan QR code yang kami kirim ke email saat registrasi.
            </p>

            {/* Camera Placeholder */}
            <div
              className="mb-3 border rounded bg-dark d-flex justify-content-center align-items-center"
              style={{ height: "200px", color: "white" }}
            >
              Camera Scanner Placeholder
            </div>

            <div className="d-grid mb-3">
              <Button variant="primary" size="lg" onClick={handleScanQR}>
                Scan QR Code
              </Button>
            </div>

            <p className="text-muted fw-bold">atau</p>

            {/* Upload QR Image */}
            <Form.Group className="mt-2 mb-4">
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleUploadQR}
              />
              {qrUploaded && (
                <div className="mt-2">
                  <img
                    src={qrUploaded}
                    alt="QR Preview"
                    style={{
                      height: "100px",
                      objectFit: "contain",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )}
            </Form.Group>

            <Button
              variant="link"
              className="text-decoration-none text-primary fw-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Butuh bantuan? Hubungi tim support
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
