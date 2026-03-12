import { motion } from "framer-motion";

const MENU_DATA = [
  {
    category: "Starters",
    items: [
      { name: "Chicken Spring Rolls", desc: "Classic wedding favorite" },
      { name: "Chicken Cheese Balls", desc: "Cheesy, crispy bite-size treats" },
      { name: "Chicken Nuggets", desc: "Golden fried chicken pieces" },
      { name: "Chicken Drumsticks", desc: "Succulent and flavorful" },
      { name: "Mini Chicken Shawarma", desc: "Wrapped in pita with garlic sauce" },
      { name: "Chicken Tikka Bites", desc: "Spiced grilled chicken cubes" },
      { name: "Fish Fingers", desc: "Crispy battered fish strips" },
      { name: "Vegetable Spring Rolls", desc: "Fresh veggies in a crisp roll" },
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Chicken Biryani", desc: "Flavorsome spiced rice with tender chicken" },
      { name: "Chicken Koyla Karahi", desc: "Smoky wok-cooked chicken with capsicum" },
      { name: "Chicken Handi", desc: "Creamy and rich chicken gravy" },
      { name: "Mutton Karahi", desc: "Spiced mutton with tomatoes and green chilies" },
      { name: "Chicken Qorma", desc: "Mildly spiced chicken curry with yogurt" },
      { name: "Beef Bihari Boti", desc: "Marinated beef cubes grilled to perfection" },
      { name: "Chicken Seekh Kabab", desc: "Spiced minced chicken skewers" },
      { name: "Chicken Tikka", desc: "Tandoori grilled chicken chunks" },
      { name: "Mutton Pulao", desc: "Fragrant rice cooked with mutton pieces" },
      { name: "Russian Salad", desc: "Creamy vegetable salad" },
      { name: "Raita", desc: "Cooling yogurt with cucumbers" },
      { name: "Naan", desc: "Soft traditional flatbread" },
      { name: "Roghni Naan", desc: "Buttery rich naan topped with sesame seeds" },
      { name: "Taftan", desc: "Saffron-infused leavened bread" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Gulab Jamun", desc: "Warm milk dumplings soaked in rose-scented syrup" },
      { name: "Rasmalai", desc: "Soft cheese patties in sweetened milk" },
      { name: "Kheer", desc: "Classic rice pudding" },
      { name: "Shahi Tukray", desc: "Fried bread in creamy milk with nuts" },
      { name: "Custard", desc: "Rich vanilla-flavored custard" },
      { name: "Ice Cream", desc: "Assorted flavors" },
      { name: "Fruit Trifle", desc: "Layers of cake, custard, and fruit" },
      { name: "Zarda", desc: "Sweet saffron rice with nuts" },
      { name: "Gajar Halwa", desc: "Carrot pudding cooked in milk and ghee" },
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
                      {/* show divider and price only if a price is provided */}
                      {item.price ? (
                        <>
                          <div className="flex-grow mx-4 border-b border-dotted border-white/20 mb-1 opacity-50"></div>
                          <span className="text-primary font-semibold shrink-0">{item.price}</span>
                        </>
                      ) : (
                        <div className="flex-grow mx-4 border-b border-dotted border-white/20 mb-1 opacity-50"></div>
                      )}
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
