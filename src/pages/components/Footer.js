import Link from "next/link";
import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";

export default function FooterComponent() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <nav
      className="navbar fixed-bottom navbar-light bg-light border-top"
      style={{ height: "60px", marginTop: "16px" }}
    >
      <Nav className="w-100 d-flex justify-content-around">
        {[
          { href: "/", icon: "bi-house", label: "Home" },
          { href: "/Attendee/attendeelist", icon: "bi-people", label: "Attendees" },
          { href: "/Matchmaking/request", icon: "bi-handshake", label: "Matchmaking" },
          { href: "/Profile/profile", icon: "bi-person", label: "Profile" },
        ].map(({ href, icon, label }) => (
          <Link key={href} href={href} legacyBehavior>
            <a
              className={`text-center fw-bold nav-link ${
                isActive(href) ? "active-link" : "no-underline-link"
              }`}
            >
              <i className={`bi ${icon}`} style={{ fontSize: "1.3rem" }}></i>
              <div style={{ fontSize: "0.75rem" }}>{label}</div>
            </a>
          </Link>
        ))}
      </Nav>
    </nav>
  );
}
