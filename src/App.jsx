import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences"; // single page
import About from "./pages/About";                 // single page
import PrivateTransfers from "./pages/PrivateTransfers";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Journal from "./pages/Journal";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="about" element={<About />} />
          <Route path="private-transfers" element={<PrivateTransfers />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="journal" element={<Journal />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-now" element={<BookNow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
