import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import productTee1 from "@/assets/product-tee-1.jpg";
import productTee2 from "@/assets/product-tee-2.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee3 from "@/assets/product-tee-3.jpg";
import community1 from "@/assets/community-1.jpg";

interface ProductData {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details: string[];
  sizes: string[];
}

const productsData: Record<string, ProductData> = {
  "kali-yuga-tee": {
    id: "1",
    name: "Kali Yuga Oversized Tee",
    price: "₹1,499",
    image: productTee1,
    description:
      "The age of transition. Oversized silhouette with drop shoulders and Sanskrit typography that speaks before you do.",
    details: [
      "240 GSM Premium Cotton",
      "Oversized Fit",
      "Drop Shoulders",
      "Ribbed Crew Neck",
      "Screen Printed Graphics",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  "trinetra-tee": {
    id: "2",
    name: "Trinetra Acid Wash Tee",
    price: "₹1,699",
    image: productTee2,
    description:
      "The third eye sees beyond. Acid-washed finish with hand-distressed edges. Each piece is uniquely weathered.",
    details: [
      "220 GSM Cotton",
      "Acid Wash Finish",
      "Relaxed Fit",
      "Hand-Distressed Details",
      "DTG Printed Graphics",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  "vanvaas-hoodie": {
    id: "3",
    name: "Vanvaas Hoodie",
    price: "₹2,499",
    image: productHoodie,
    description:
      "Into the exile. Heavyweight hoodie crafted for those who walk their own path. Minimal branding, maximum presence.",
    details: [
      "380 GSM Heavyweight Terry",
      "Oversized Fit",
      "Kangaroo Pocket",
      "Brushed Interior",
      "Metal Drawcord Tips",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  "sanskrit-tee": {
    id: "4",
    name: "Sanskrit Typography Tee",
    price: "₹1,399",
    image: productTee3,
    description:
      "Words before language. Bold Devanagari script that bridges the ancient and the now.",
    details: [
      "220 GSM Cotton",
      "Relaxed Fit",
      "Reinforced Collar",
      "Screen Printed Typography",
      "Pre-Washed Finish",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
};

const Product = () => {
  const { slug } = useParams();
  const product = productsData[slug || "kali-yuga-tee"];
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />
      <Navbar />

      <main className="pt-20 md:pt-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 lg:py-16">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="aspect-[3/4] bg-card overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="aspect-[4/3] bg-card overflow-hidden">
                <img
                  src={community1}
                  alt={`${product.name} styled`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-32 lg:h-fit"
            >
              <span className="text-editorial text-yuga-ash mb-4 block">
                Drop 01 — Kali Yuga
              </span>

              <h1 className="text-display text-display-md text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-2xl text-foreground mb-8">{product.price}</p>

              <p className="text-manifesto text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-editorial text-foreground">
                    Select Size
                  </span>
                  <Link
                    to="/size-guide"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                  >
                    Size Guide
                  </Link>
                </div>

                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border transition-all duration-300 font-display text-sm ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <span className="text-editorial text-foreground mb-4 block">
                  Quantity
                </span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-display text-foreground w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                className={`w-full py-4 text-editorial transition-all duration-300 ${
                  selectedSize
                    ? "bg-foreground text-background hover:bg-yuga-offwhite hover:text-yuga-black"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
                disabled={!selectedSize}
              >
                {selectedSize ? "Add to Cart" : "Select a Size"}
              </button>

              {/* Product Details */}
              <div className="mt-12 pt-8 border-t border-border">
                <span className="text-editorial text-foreground mb-4 block">
                  Details
                </span>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-yuga-ash rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
