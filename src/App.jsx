import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Yacht from "./pages/Yacht";

/**
 * We keep a top padding so content doesn't hide under the fixed header.
 * Your header is styled globally via index.css (header { position: fixed; ... } )
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/yacht/:id" element={<Yacht />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
