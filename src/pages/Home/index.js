import Head from "next/head";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import Hero from "../components/Hero";
import DetailSection from "../components/DetailSection";
import AgendaEvent from "../components/AgendaEvent";
import Sponsor from "../components/Sponsor";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Netlify Event App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavbarComponent />
      <Hero />
      <DetailSection />
      <AgendaEvent />
      <Sponsor />
      <FooterComponent />
    </>
  );
}
