"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  ListGroup,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

const sampleAttendees = [
  {
    id: 1,
    logoUrl: "/logos/startup1.png",
    name: "Startup A",
    industry: "Teknologi Finansial",
    category: "startup",
  },
  {
    id: 2,
    logoUrl: "/logos/bumn1.png",
    name: "BUMN B",
    industry: "Energi Terbarukan",
    category: "bumn",
  },
  {
    id: 3,
    logoUrl: "/logos/startup2.png",
    name: "Startup C",
    industry: "E-commerce",
    category: "startup",
  },
  {
    id: 4,
    logoUrl: "/logos/bumn2.png",
    name: "BUMN D",
    industry: "Infrastruktur",
    category: "bumn",
  },
  {
    id: 5,
    logoUrl: "/logos/startup3.png",
    name: "Startup E",
    industry: "Kesehatan Digital",
    category: "startup",
  },
];

export default function AttendeeListPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState(null);

  const filteredAttendees = sampleAttendees.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory
      ? attendee.category === filterCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  const handleClick = (attendee) => {
    router.push(`/attendee/${attendee.id}`);
  };

  return (
    <>
      <NavbarComponent />
      <Container className="my-4">
        {/* Search Bar */}
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Cari perusahaan atau bidang industri..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-secondary" onClick={() => setSearchTerm("")}>
            Clear
          </Button>
        </InputGroup>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center mb-4 gap-3">
          <Button
            variant={filterCategory === "startup" ? "primary" : "outline-primary"}
            onClick={() =>
              setFilterCategory(filterCategory === "startup" ? null : "startup")
            }
          >
            Startup
          </Button>
          <Button
            variant={filterCategory === "bumn" ? "primary" : "outline-primary"}
            onClick={() =>
              setFilterCategory(filterCategory === "bumn" ? null : "bumn")
            }
          >
            BUMN
          </Button>
        </div>

        {/* List Attendees Vertikal */}
        <ListGroup>
          {filteredAttendees.length === 0 && (
            <ListGroup.Item className="text-center text-muted">
              Data tidak ditemukan
            </ListGroup.Item>
          )}
          {filteredAttendees.map((attendee) => (
            <ListGroup.Item
              key={attendee.id}
              action
              onClick={() => handleClick(attendee)}
              className="d-flex align-items-center"
            >
              <img
                src={attendee.logoUrl}
                alt={`${attendee.name} logo`}
                style={{ width: 60, height: 60, objectFit: "contain", marginRight: 15 }}
              />
              <div>
                <div style={{ fontWeight: "600" }}>{attendee.name}</div>
                <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {attendee.industry}
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      <FooterComponent />
    </>
  );
}
