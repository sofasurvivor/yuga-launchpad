import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
}

const products: Product[] = [
  {
    id: "1",
    name: "Kali Yuga Oversized Tee",
    price: "₹1,499",
    image: productTee1,
    slug: "kali-yuga-tee",
  },
  {
    id: "2",
    name: "Trinetra Acid Wash Tee",
    price: "₹1,699",
    image: productTee2,
    slug: "trinetra-tee",
  },
  {
    id: "3",
    name: "Vanvaas Hoodie",
    price: "₹2,499",
    image: productHoodie,
    slug: "vanvaas-hoodie",
  },
  {
    id: "4",
    name: "Sanskrit Typography Tee",
    price: "₹1,399",
    image: productTee3,
    slug: "sanskrit-tee",
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.slug}`} className="group block product-card">
        <div className="relative aspect-[3/4] bg-card overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image w-full h-full object-cover object-center"
          />
          {/* Hover overlay */}
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
  );
};

const BestSellers = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <span className="text-editorial text-yuga-ash mb-2 block">Featured</span>
            <h2 className="text-display text-display-md text-foreground">
              Best Sellers
            </h2>
          </div>
          
          <Link
            to="/collection"
            className="hidden md:block text-editorial text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            View All
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Mobile View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center md:hidden"
        >
          <Link to="/collection" className="btn-hero inline-block">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellers;
