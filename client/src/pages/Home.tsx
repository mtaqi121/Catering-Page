import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Menu />
        <Booking />
      </main>
      
      <Footer />

      {/* floating WhatsApp button */}
      <a
        href="https://wa.me/923043635628"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <FaWhatsapp className="text-white w-6 h-6" />
      </a>
    </div>
  );
}
