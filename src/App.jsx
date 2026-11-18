import { Helmet } from "react-helmet";
import Home from "./pages/Home";

export default function App() {
  return <>
    <Helmet>
      <title>Sharanabasappa Kumusagi — Full Stack Developer</title>
      <meta name="description" content="Portfolio of Sharanabasappa Kumusagi, a Bengaluru-based full stack developer and MCA student building practical web applications with React, Next.js, FastAPI, and PostgreSQL." />
      <meta name="author" content="Sharanabasappa Kumusagi" />
      <meta property="og:title" content="Sharanabasappa Kumusagi — Full Stack Developer" />
      <meta property="og:description" content="Full stack developer and MCA student building useful web products." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/sharanabasappa-kumusagi.jpeg" />
      <meta name="theme-color" content="#f3f1eb" />
    </Helmet>
    <div className="site-shell"><Home /></div>
  </>;
}
