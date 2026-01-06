import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Header */}
        <section className="container-editorial mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-editorial text-yuga-ash mb-4 block">
              Community
            </span>
            <h1 className="text-display text-display-lg text-foreground mb-6">
              The Chapters
            </h1>
            <p className="text-manifesto text-muted-foreground">
              Every wearer is a chapter in the YUGA story. From temple towns to 
              metropolitan rooftops, this is how our community wears the age.
            </p>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="container-editorial pb-20 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[community1, community2, community1, community2, community1, community2].map(
              (img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-[4/5] overflow-hidden group"
                >
                  <img
                    src={img}
                    alt={`YUGA Chapter ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              )
            )}
          </div>

          {/* Submit CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 md:mt-24"
          >
            <p className="text-manifesto text-muted-foreground mb-6">
              Wearing YUGA? Tag us @yuga.official to be featured.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-block"
            >
              Follow on Instagram
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
