import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Manifesto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "They told us culture is old.",
    "",
    "We grew up watching anime,",
    "scrolling reels,",
    "walking barefoot into temples.",
    "",
    "We are not confused.",
    "We are layered.",
    "",
    "YUGA is not about gods on fabric.",
    "It's about memory in motion.",
    "",
    "Ancient stories. New streets.",
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-yuga-charcoal border-y border-border"
    >
      <div className="container-editorial max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-editorial text-yuga-ash mb-12 block">
            The Manifesto
          </span>

          <div className="space-y-2">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className={`text-manifesto ${
                  line === "" 
                    ? "h-6" 
                    : line.includes("YUGA") || line.includes("Ancient stories")
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
