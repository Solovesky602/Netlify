"use client";

import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function CompanyProfilePage() {
  const [logoPreview, setLogoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [about, setAbout] = useState("");
  const [industry, setIndustry] = useState("");
  const [isDataSaved, setIsDataSaved] = useState(false);
  const router = useRouter();

  const handleImagePreview = (e, setter) => {
    const file = e.target.files?.[0];
    if (file) {
      setter(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!companyName || !about || !industry) {
      await Swal.fire({
        icon: "warning",
        title: "Lengkapi Data",
        html: "Bidang yang bertanda <span style='color: red'>*</span> wajib diisi.",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsDataSaved(true);

    await Swal.fire({
      icon: "success",
      title: "Data Tersimpan",
      text: "Data perusahaan telah berhasil disimpan.",
      confirmButtonText: "OK",
    });

    router.push("/Regislogin/attandencees");
  };

  return (
    <Container className="py-5">
      {/* Logo & Judul Event */}
      <div className="text-center mb-5">
        <div className="mb-3">
          <img src="/logo.png" alt="Event Logo" style={{ height: "100px" }} />
        </div>
        <h1 className="fw-bold">Tech Conference 2023</h1>
      </div>

      <Card className="p-4 shadow-sm">
        <h3 className="mb-4">Company Profile</h3>
        <Form onSubmit={handleSubmit}>
          {/* Upload Company Logo */}
          <Form.Group className="mb-3">
            <Form.Label>Upload Company Logo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleImagePreview(e, setLogoPreview)}
            />
            {logoPreview && (
              <img
                src={logoPreview}
                alt="Logo Preview"
                style={{ marginTop: "10px", height: "100px", objectFit: "contain" }}
              />
            )}
          </Form.Group>

          {/* Company Name */}
          <Form.Group className="mb-3">
            <Form.Label>
              Company Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
            />
          </Form.Group>

          {/* About Company */}
          <Form.Group className="mb-3">
            <Form.Label>
              About Company <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Tell us about your company"
            />
          </Form.Group>

          {/* Industry */}
          <Form.Group className="mb-3">
            <Form.Label>
              Industry <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Select industry</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Manufacturing</option>
              <option>Retail</option>
              <option>Energy</option>
              <option>Transportation</option>
              <option>Media</option>
              <option>Government</option>
            </Form.Select>
          </Form.Group>

          {/* Upload Activity Image */}
          <Form.Group className="mb-3">
            <Form.Label>Upload Company Activity Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleImagePreview(e, setImagePreview)}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Activity Preview"
                style={{ marginTop: "10px", height: "120px", objectFit: "cover" }}
              />
            )}
          </Form.Group>

          {/* Upload Video */}
          <Form.Group className="mb-3">
            <Form.Label>Upload Company Video</Form.Label>
            <Form.Control type="file" accept="video/*" />
          </Form.Group>

          {/* Upload Document */}
          <Form.Group className="mb-3">
            <Form.Label>Upload Company Document</Form.Label>
            <Form.Control type="file" accept=".pdf,.doc,.docx" />
          </Form.Group>

          {/* Social Media Platform */}
          <Form.Group className="mb-3">
            <Form.Label>Select Social Media Platform</Form.Label>
            <Form.Select>
              <option value="">Select platform</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
              <option>Twitter</option>
              <option>Facebook</option>
              <option>YouTube</option>
              <option>Website</option>
            </Form.Select>
          </Form.Group>

          {/* Social Media Link */}
          <Form.Group className="mb-4">
            <Form.Label>Link or Social Media ID</Form.Label>
            <Form.Control type="text" placeholder="Paste the link or username" />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-end">
            <Button
              variant="success"
              style={{ backgroundColor: "#28c76f", borderColor: "#28c76f" }}
              type="submit"
            >
              Save and Continue
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
