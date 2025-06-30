import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Hero from "../components/Hero";
import DetailSection from "../components/DetailSection";
import AgendaEvent from "../components/AgendaEvent";
import Sponsor from "../components/Sponsor";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <DetailSection />
      <AgendaEvent />
      <Sponsor />
      <FooterComponent />
    </>
  );
}
