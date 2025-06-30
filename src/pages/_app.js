import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";  // optional, kalau ada css custom

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
