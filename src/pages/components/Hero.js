import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const slides = [
  {
    title: "Tech Conference 2023",
    date: "April 15–17, 2023",
    location: "Jakarta Convention Center",
    image: "/images/slide1.jpg", // ganti dengan path gambar asli nanti
  },
  {
    title: "Innovation Summit 2023",
    date: "May 10–12, 2023",
    location: "Jakarta Convention Center",
    image: "/images/slide2.jpg",
  },
  {
    title: "Developer Meetup 2023",
    date: "June 5–7, 2023",
    location: "Jakarta Convention Center",
    image: "/images/slide3.jpg",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const { title, date, location, image } = slides[currentIndex];

  return (
    <div
      className="hero-section position-relative text-center text-white d-flex align-items-center"
      style={{
        height: "450px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay blur + dark */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <Container style={{ position: "relative", zIndex: 2 }}>
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead">
          📅 {date} <br />
          📍 {location}
        </p>
        <Button href="/agenda" variant="primary" size="lg">
          Lihat Agenda
        </Button>
      </Container>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: "absolute",
          top: "50%",
          left: "15px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          color: "white",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: "absolute",
          top: "50%",
          right: "15px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          color: "white",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        ›
      </button>
    </div>
  );
}
