import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import productTee1 from "@/assets/product-tee-1.jpg";
import productTee2 from "@/assets/product-tee-2.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee3 from "@/assets/product-tee-3.jpg";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
  category: string;
}

const allProducts: Product[] = [
  {
    id: "1",
    name: "Kali Yuga Oversized Tee",
    price: "₹1,499",
    image: productTee1,
    slug: "kali-yuga-tee",
    category: "tees",
  },
  {
    id: "2",
    name: "Trinetra Acid Wash Tee",
    price: "₹1,699",
    image: productTee2,
    slug: "trinetra-tee",
    category: "tees",
  },
  {
    id: "3",
    name: "Vanvaas Hoodie",
    price: "₹2,499",
    image: productHoodie,
    slug: "vanvaas-hoodie",
    category: "hoodies",
  },
  {
    id: "4",
    name: "Sanskrit Typography Tee",
    price: "₹1,399",
    image: productTee3,
    slug: "sanskrit-tee",
    category: "tees",
  },
  {
    id: "5",
    name: "Gada Symbol Tee",
    price: "₹1,299",
    image: productTee1,
    slug: "gada-tee",
    category: "tees",
  },
  {
    id: "6",
    name: "Rakshasa Cargo Pants",
    price: "₹2,799",
    image: productHoodie,
    slug: "rakshasa-cargo",
    category: "bottoms",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "tees", name: "T-Shirts" },
  { id: "hoodies", name: "Hoodies" },
  { id: "bottoms", name: "Bottomwear" },
];

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Header */}
        <section className="container-editorial mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-editorial text-yuga-ash mb-4 block">
              Drop 01
            </span>
            <h1 className="text-display text-display-lg text-foreground mb-6">
              Kali Yuga Collection
            </h1>
            <p className="text-manifesto text-muted-foreground max-w-xl">
              The age of transition. Where darkness meets awakening.
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="container-editorial mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-editorial whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Product Grid */}
        <section className="container-editorial pb-20 md:pb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/product/${product.slug}`}
                  className="group block product-card"
                >
                  <div className="relative aspect-[3/4] bg-card overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-image w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-sm md:text-base text-foreground group-hover:text-muted-foreground transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.price}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collection;
