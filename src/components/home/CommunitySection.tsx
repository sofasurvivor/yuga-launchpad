import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-editorial text-yuga-ash mb-4 block">
            Community
          </span>
          <h2 className="text-display text-display-md text-foreground">
            Worn by the Chapters
          </h2>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <img
              src={community1}
              alt="YUGA Community"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-editorial text-yuga-ash mb-1">@yuga.chapter</p>
              <p className="text-sm text-foreground">Mumbai, India</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <img
              src={community2}
              alt="YUGA Community"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-editorial text-yuga-ash mb-1">@yuga.chapter</p>
              <p className="text-sm text-foreground">Delhi, India</p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link to="/community" className="btn-hero inline-block">
            Join the Chapter
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
