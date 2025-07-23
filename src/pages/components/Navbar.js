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

          <Link href="/" legacyBehavior>
            <a className="navbar-brand ms-2">Event App</a>
          </Link>

          <Link href="/Regislogin/loginregis" legacyBehavior>
            <a className="btn btn-outline-light ms-auto">Login / Register</a>
          </Link>
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
              { href: "/Attendee/attendeelist", label: "Attendees" },
              { href: "/Matchmaking/request", label: "Matchmaking" },
              { href: "/Profile/profile", label: "Profile" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} legacyBehavior>
                <a
                  className={`nav-link ${
                    isActive(href) ? "active-link" : "no-underline-link"
                  }`}
                  onClick={handleClose}
                >
                  {label}
                </a>
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
