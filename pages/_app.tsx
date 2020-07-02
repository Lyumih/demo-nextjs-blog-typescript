// import "../styles/theme-bootstrap.scss";
import "bootstrap/dist/css/bootstrap.min.css"

import "../styles/global.scss";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
