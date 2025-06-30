import { useState } from "react";
import Link from "next/link";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { useRouter } from "next/router";

export default function NavbarComponent() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const router = useRouter();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false} sticky="top">
        <Container>
          <Button variant="dark" onClick={handleShow} aria-label="Menu">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Link href="/" passHref>
            <Navbar.Brand className="ms-2 ">Event App</Navbar.Brand>
          </Link>

          <Button href="/login" variant="outline-light" className="ms-auto">
            Login / Register
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {[
              { href: "/", label: "Home" },
              { href: "/attendees", label: "Attendees" },
              { href: "/matchmaking", label: "Matchmaking" },
              { href: "/profile", label: "Profile" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} passHref>
                <Nav.Link
                  className={isActive(href) ? "active-link" : "no-underline-link"}
                  onClick={handleClose}
                >
                  {label}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
