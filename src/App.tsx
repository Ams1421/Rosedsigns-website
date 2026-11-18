
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Process from "./pages/Process";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="placeholder-page">
      <div>
        <p className="eyebrow">ROSEDESIGNS</p>
        <h1>{title}</h1>
        <p>This page is being created. Stay tuned.</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={<PlaceholderPage title="Page Not Found" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
