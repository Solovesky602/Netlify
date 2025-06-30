import { Card, Container, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function VerifyPage() {
    const router = useRouter();

    const handleVerify = (e) => {
        e.preventDefault();
        // Simulasi verifikasi
        import("sweetalert2").then((Swal) =>
        Swal.default.fire({
            icon: "success",
            title: "Verifikasi Berhasil!",
            text: "Email kamu sudah diverifikasi.",
            confirmButtonText: "OK"
        }).then((result) => {
            if (result.isConfirmed) {
            router.push("/company");
            }
        })
        );
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Card className="p-4 shadow" style={{ maxWidth: "450px", width: "100%" }}>
            {/* Logo & Judul Event */}
            <div className="text-center mb-3">
            <div style={{ height: "80px", backgroundColor: "#ddd" }} className="mb-3 rounded" /> {/* Placeholder Logo */}
            <h3 className="fw-bold">Tech Conference 2023</h3>
            <p className="text-muted mb-1">📅 April 15–17, 2023</p>
            <p className="text-muted mb-3">📍 Jakarta Convention Center</p>
            </div>

            {/* Form Verifikasi */}
            <Form onSubmit={handleVerify}>
            <Form.Group controlId="verificationCode" className="mb-3">
                <Form.Label>Kode Verifikasi</Form.Label>
                <Form.Control type="text" placeholder="Masukkan kode dari email kamu" required />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">Verifikasi</Button>
            </Form>

            {/* Bantuan */}
            <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: "0.875rem" }}>
            Tidak menerima kode? Cek folder spam atau{" "}
            <a href="#" className="text-decoration-none">hubungi tim support kami</a>.
            </p>
        </Card>
        </Container>
    );
    }
