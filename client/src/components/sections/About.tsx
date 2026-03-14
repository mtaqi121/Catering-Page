import { motion } from "framer-motion";
import { MapPin, Clock, ChefHat } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* About Us Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Our Story</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              A Legacy of <br/>
              <span className="text-primary italic">Culinary Excellence</span>
            </h2>
            <div className="space-y-4 text-white/60 font-light leading-relaxed">
              <p>
                SHAH – DIYANA CATERING SERVICES &amp; PAKWAN CENTER<br/>
                FARMOUSE PACKAGES
              </p>
              <p className="italic">
                “Where Taste Meets Beautiful Celebrations ✨🍴🎉”
              </p>
              <p>
                SHAH – DIYANA CATERING SERVICES &amp; Pakwan Center provides delicious, fresh, and hygienic food for all types of events and daily orders. We are committed to quality taste, beautiful presentation, and professional service to make every occasion special.
              </p>
              <p className="font-semibold">Our Services:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Wedding Events</li>
                <li>Valima Functions</li>
                <li>Mehndi &amp; Mayo</li>
                <li>Farmhouse Events</li>
                <li>Corporate Events</li>
                <li>Private Parties &amp; Family Functions</li>
                <li>Birthday &amp; Anniversary Celebrations</li>
                <li>Aqeeqa &amp; Religious Events</li>
                <li>School &amp; College Events</li>
                <li>Buffet, Live BBQ &amp; Outdoor Catering</li>
                <li>Hi-Tea &amp; Dinner Arrangements</li>
                <li>Pakwan Orders for Home &amp; Events</li>
              </ul>
              <p>We offer customized menus according to your taste and budget with guaranteed quality and timely service.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-lg">Master Chefs</h4>
                  <p className="text-sm text-white/50">Decades of authentic cooking experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-lg">Timely Service</h4>
                  <p className="text-sm text-white/50">Punctual delivery for every event.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <a
            href="https://maps.app.goo.gl/wsVKS8mhU18HEC6w5"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-xl overflow-hidden group shadow-2xl shadow-black"
            >
            {/* beautiful restaurant interior aesthetic lighting */}
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Restaurant Location"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="absolute inset-x-0 bottom-0 p-8 glass-panel m-6 rounded-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary w-6 h-6" />
                <h3 className="font-display text-2xl font-bold text-white">Our Location</h3>
              </div>
              <p className="text-white/80 mb-2">Shop No 06, Gulshan-e-Shamim</p>
              <p className="text-white/60 text-sm">Yaseenabad, FB Area, Karachi</p>
            </div>
          </motion.div>
          </a>

        </div>
      </div>
    </section>
  );
}
