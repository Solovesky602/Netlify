import { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const sponsors = [
  {
    name: "TechCorp",
    logo: "/sponsors/techcorp.png",
    link: "https://techcorp.com",
  },
  {
    name: "InnovateX",
    logo: "/sponsors/innovatex.png",
    link: "https://innovatex.com",
  },
  {
    name: "EduNext",
    logo: "/sponsors/edunext.png",
  },
  {
    name: "SmartAI",
    logo: "/sponsors/smartai.png",
    link: "https://smartai.co",
  },
  {
    name: "Kompas Tekno",
    logo: "/sponsors/kompastekno.png",
  },
  {
    name: "TelcoID",
    logo: "/sponsors/telcoid.png",
    link: "https://telcoid.id",
  },
  {
    name: "Sakura Labs",
    logo: "/sponsors/sakura.png",
  },
  // ...tambah lagi kalau ada
];

export default function Sponsor() {
  const [showAll, setShowAll] = useState(false);

  // Jumlah sponsor awal ditampilkan
  const visibleSponsors = showAll ? sponsors : sponsors.slice(0, 4);

  return (
    <Container className="my-5" style={{ paddingBottom: "100px" }}>
      <h2 className="mb-4 text-center">Sponsor</h2>

      <Row className="justify-content-center">
        {visibleSponsors.map((sponsor, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            {sponsor.link ? (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="d-block"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fluid
                  style={{ maxHeight: "60px", objectFit: "contain" }}
                />
              </a>
            ) : (
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fluid
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            )}
          </Col>
        ))}
      </Row>

      {sponsors.length > 4 && (
        <div className="text-center">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Sembunyikan" : "Lihat Semua"}
          </Button>
        </div>
      )}
    </Container>
  );
}
