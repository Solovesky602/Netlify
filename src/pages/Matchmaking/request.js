"use client";

import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { useRouter } from "next/navigation";

const sessionList = [
  {
    id: 1,
    title: "Session 1",
    time: "13:30 - 14:00 WITA",
    status: "available",
  },
  {
    id: 2,
    title: "Session 2",
    time: "14:00 - 14:30 WITA",
    status: "pending",
  },
  {
    id: 3,
    title: "Session 3",
    time: "14:30 - 15:00 WITA",
    status: "matched",
  },
  {
    id: 4,
    title: "Session 4",
    time: "15:00 - 15:30 WITA",
    status: "available",
  },
  {
    id: 5,
    title: "Session 5",
    time: "15:30 - 16:00 WITA",
    status: "full",
  },
  {
    id: 6,
    title: "Session 6",
    time: "16:00 - 16:30 WITA",
    status: "available",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "available":
      return "success";
    case "pending":
      return "warning";
    case "matched":
      return "primary";
    case "full":
      return "secondary";
    default:
      return "light";
  }
};

export default function MatchmakingRequestPage() {
  const router = useRouter();

  return (
    <>
      <NavbarComponent />
      <Container className="my-4" style={{ paddingBottom: "100px" }}>
        {/* Toggle Button: Schedule | Request */}
        <div className="d-flex justify-content-center mb-4 gap-2">
          <Button variant="outline-primary" onClick={() => router.push("/matchmaking/schedule")}>
            Schedule
          </Button>
          <Button variant="primary" disabled>
            Request
          </Button>
        </div>

        {/* Button + Request Matchmaking */}
        <div className="d-flex justify-content-end mb-3">
          <Button variant="success" onClick={() => alert("Tambah request nanti ke sini!")}>
            + Request Matchmaking
          </Button>
        </div>

        {/* Info Card */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Text className="mb-1">
              <strong>Matched:</strong> 1 of 6 sessions
            </Card.Text>
            <Card.Text className="mb-0">
              <strong>Request Open until:</strong> 19 Juli 2025, 15:00 WITA
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Session Cards */}
        <Row xs={1} className="g-3">
          {sessionList.map((session) => (
            <Col key={session.id}>
              <Card className="shadow-sm">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="mb-1">{session.title}</Card.Title>
                    <Card.Text className="text-muted mb-0">{session.time}</Card.Text>
                  </div>
                  <Badge bg={getStatusColor(session.status)} className="px-3 py-2 text-capitalize">
                    {session.status}
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}
