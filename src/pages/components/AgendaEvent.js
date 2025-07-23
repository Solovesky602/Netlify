import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Image } from "react-bootstrap";

const agendaData = [
  {
    id: 1,
    title: "Topik Agenda #1",
    date: "30 Juni 2025",
    time: "09.00 - 10.30 WIB",
    location: "Ruang A1",
    speaker: "Budi Santoso",
    speakerPhoto: "/speakers/budi.jpg", // contoh path gambar
    description:
      "Deskripsi lengkap tentang Topik Agenda #1. Isi detail acara, pembicara, dan info tambahan lainnya.",
  },
  {
    id: 2,
    title: "Topik Agenda #2",
    date: "30 Juni 2025",
    time: "11.00 - 12.00 WIB",
    location: "Ruang A2",
    speaker: "Sari Dewi",
    speakerPhoto: "/speakers/sari.jpg",
    description:
      "Deskripsi lengkap tentang Topik Agenda #2. Info lengkap terkait agenda ini.",
  },
  {
    id: 3,
    title: "Topik Agenda #3",
    date: "1 Juli 2025",
    time: "13.00 - 14.30 WIB",
    location: "Ruang B1",
    speaker: "Joko Widodo",
    speakerPhoto: "/speakers/joko.jpg",
    description:
      "Detail acara untuk Topik Agenda #3, termasuk pembicara dan topik bahasan.",
  },
  {
    id: 4,
    title: "Topik Agenda #4",
    date: "1 Juli 2025",
    time: "15.00 - 16.00 WIB",
    location: "Ruang B2",
    speaker: "Ani Yudhoyono",
    speakerPhoto: "/speakers/ani.jpg",
    description:
      "Detail acara dan pembicara Topik Agenda #4 yang menarik untuk diikuti.",
  },
  {
    id: 5,
    title: "Topik Agenda #5",
    date: "2 Juli 2025",
    time: "09.00 - 10.30 WIB",
    location: "Ruang C1",
    speaker: "Dewi Persik",
    speakerPhoto: "/speakers/dewi.jpg",
    description: "Informasi lengkap Topik Agenda #5 dan pembicara terkait.",
  },
];

export default function AgendaEvent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAgenda, setSelectedAgenda] = useState(null);

  const handleShowDetail = (agenda) => {
    setSelectedAgenda(agenda);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedAgenda(null);
  };

  // Ambil 4 agenda pertama
  const visibleAgenda = agendaData.slice(0, 4);

  // Jika kurang dari 4 card, center row
  const rowClass = visibleAgenda.length < 4 ? "justify-content-center" : "";

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Agenda Terbaru</h2>

      <Row className={rowClass}>
        {visibleAgenda.map((agenda) => (
          <Col md={3} sm={6} xs={12} className="mb-4" key={agenda.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{agenda.title}</Card.Title>
                <Card.Text>
                  Tanggal: {agenda.date}
                  <br />
                  Waktu: {agenda.time}
                  <br />
                  Lokasi: {agenda.location}
                  <br />
                  Speaker: {agenda.speaker}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleShowDetail(agenda)}
                >
                  Detail
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center">
        <Button variant="link" onClick={() => setShowModal(true)}>
          View All
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose} size="lg" centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedAgenda ? selectedAgenda.title : "Semua Agenda"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedAgenda ? (
            <>
              <p>
                <strong>Tanggal:</strong> {selectedAgenda.date}
              </p>
              <p>
                <strong>Waktu:</strong> {selectedAgenda.time}
              </p>
              <p>
                <strong>Lokasi:</strong> {selectedAgenda.location}
              </p>
              <p className="d-flex align-items-center gap-2">
                <Image
                  src={selectedAgenda.speakerPhoto}
                  alt={selectedAgenda.speaker}
                  width={40}
                  height={40}
                  className="rounded-circle"
                  style={{ objectFit: "cover" }}
                />
                <strong>Speaker:</strong> {selectedAgenda.speaker}
              </p>
              <p>{selectedAgenda.description}</p>
            </>
          ) : (
            agendaData.map((agenda) => (
              <div
                key={agenda.id}
                className="mb-3 border-bottom pb-2"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedAgenda(agenda)}
              >
                <h5>{agenda.title}</h5>
                <p>
                  {agenda.date} | {agenda.time} | {agenda.location}
                  <br />
                  Speaker: {agenda.speaker}
                </p>
              </div>
            ))
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}
