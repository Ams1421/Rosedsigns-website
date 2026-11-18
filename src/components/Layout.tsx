
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />

      <Link
        className="whatsapp-float"
        to="/contact"
        aria-label="Contact RoseDsigns"
        title="Contact RoseDsigns"
      >
        <MessageCircle />
      </Link>

      <a className="back-to-top" href="#top" aria-label="Back to top">
        <ArrowUpRight />
      </a>
    </>
  );
}

export default Layout;
