import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DropFeature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background border-t border-border">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-editorial text-yuga-ash mb-4 block">
            Now Available
          </span>
          
          <h2 className="text-display text-display-lg text-foreground mb-8">
            DROP 01 — KALI YUGA
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-manifesto text-muted-foreground mb-12"
          >
            They call it darkness.
            <br />
            <span className="text-foreground">We call it transition.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/collection" className="btn-hero inline-block">
              Shop the Drop
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DropFeature;
