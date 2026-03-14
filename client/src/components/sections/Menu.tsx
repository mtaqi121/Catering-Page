import { motion } from "framer-motion";

const MENU_DATA = [
  {
    category: "Starters",
    items: [
      { name: "Fresh Juice", desc: "" },
      { name: "Chicken Wonton", desc: "" },
      { name: "Mint Rolls", desc: "" },
      { name: "Chicken Spring Rolls", desc: "" },
      { name: "Arabian Cheese Puff", desc: "" },
      { name: "Mini Sandwich", desc: "" },
      { name: "Chicken Mini Samosa", desc: "" },
      { name: "Vegetable Samosa", desc: "" },
      { name: "Chicken Wings", desc: "" },
      { name: "Chicken Nuggets", desc: "" },
      { name: "Prawn Tempura", desc: "" },
      { name: "Cheese Balls", desc: "" },
      { name: "French Fries", desc: "" },
      { name: "Dynamite Chicken", desc: "" },
      { name: "Prawn Dynamite", desc: "" },
      { name: "Mini Pizza", desc: "" },
      { name: "Chicken Patties", desc: "" },
      { name: "Chicken Popcorn", desc: "" },
      { name: "Drumsticks & much more", desc: "" },
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Chicken Biryani", desc: "" },
      { name: "Mutton Biryani", desc: "" },
      { name: "Beef Biryani", desc: "" },
      { name: "Sindhi Biryani", desc: "" },
      { name: "Hyderabadi Biryani", desc: "" },
      { name: "Chicken Karahi", desc: "" },
      { name: "Mutton Karahi", desc: "" },
      { name: "Beef Karahi", desc: "" },
      { name: "White Karahi", desc: "" },
      { name: "Peshawari Karahi", desc: "" },
      { name: "Chicken Qorma", desc: "" },
      { name: "Mutton Qorma", desc: "" },
      { name: "Beef Qorma", desc: "" },
      { name: "Shahi Qorma", desc: "" },
      { name: "Chicken Handi", desc: "" },
      { name: "Chicken Malai Handi", desc: "" },
      { name: "Chicken Achari Handi", desc: "" },
      { name: "Mutton Handi", desc: "" },
      { name: "Chicken Tikka", desc: "" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Cream Cocktail", desc: "" },
      { name: "Doodh Dulari", desc: "" },
      { name: "Rabri kheer", desc: "" },
      { name: "Arabian Delight", desc: "" },
      { name: "Mango Delight", desc: "" },
      { name: "Pineapple delight", desc: "" },
      { name: "Anjeer Delight", desc: "" },
      { name: "Vanilla Delight", desc: "" },
      { name: "Gulab Jamun", desc: "" },
      { name: "Ras Malai", desc: "" },
      { name: "Kheer", desc: "" },
      { name: "Zarda", desc: "" },
      { name: "Shahi Tukda", desc: "" },
      { name: "Kunafa", desc: "" },
      { name: "Gajar ka Halwa (in seasons only)", desc: "" },
      { name: "Suji ka Halwa", desc: "" },
      { name: "Dessert Bar with Fountain", desc: "" },
      { name: "Litred ice Cream", desc: "" },
      { name: "Kulfa & much more.", desc: "" },
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-secondary/50 border-t border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4 justify-center"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Discover Our</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white"
          >
            Culinary Offerings
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {MENU_DATA.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-background rounded-xl p-8 border border-white/5 shadow-xl hover:border-primary/30 transition-colors duration-300 self-start"
            >
              <h3 className="font-display text-2xl text-primary font-bold mb-8 text-center border-b border-white/10 pb-4">
                {section.category}
              </h3>
              <ul className="space-y-8">
                {section.items.map((item) => (
                  <li key={item.name} className="group cursor-pointer">
                    <div className="flex items-end justify-between mb-1">
                      <h4 className="text-white font-medium font-display tracking-wide group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-dotted border-white/20 mb-1 opacity-50"></div>
                    </div>
                    <p className="text-sm text-white/50 font-light pr-12">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/10 border border-primary/20 rounded-xl p-8 text-center max-w-2xl mx-auto backdrop-blur-sm"
        >
          <h4 className="font-display text-2xl text-white mb-2">Planning a Large Event?</h4>
          <p className="text-white/70 mb-4">We offer customized catering packages tailored to your specific needs and guest counts.</p>
          <a href="https://wa.me/923043635628" target="_blank" rel="noopener noreferrer" className="inline-block text-primary font-semibold uppercase tracking-wider hover:text-white transition-colors border-b border-primary hover:border-white pb-1">
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
