import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Story = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
            src={heroBg}
            alt="YUGA Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-editorial pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-editorial text-yuga-ash mb-4 block">
                  Our Story
                </span>
                <h1 className="text-display text-display-xl text-foreground">
                  About YUGA
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-editorial max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-manifesto text-muted-foreground">
                YUGA was born from a simple observation: the streets we walk today carry 
                the echoes of stories told for millennia. We are not one thing. We are 
                anime and epics. Reels and rituals. Temple steps and concrete sidewalks.
              </p>

              <p className="text-manifesto text-muted-foreground">
                We don't make devotional wear. We make streetwear that acknowledges 
                where we come from without being defined by it. Cultural, not religious. 
                Confident, not preachy. Modern, not derivative.
              </p>

              <p className="text-manifesto text-foreground font-medium">
                YUGA is for those who understand that the past and future exist in the 
                same moment — on the same street.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is a Yuga */}
        <section id="yuga" className="section-padding bg-yuga-charcoal border-y border-border">
          <div className="container-editorial max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-editorial text-yuga-ash mb-8 block">
                The Philosophy
              </span>
              <h2 className="text-display text-display-md text-foreground mb-8">
                What is a Yuga?
              </h2>
              <p className="text-manifesto text-muted-foreground mb-6">
                In ancient philosophy, a Yuga is an age — a cycle of time that shapes 
                the world. There are four Yugas, each with its own character, challenges, 
                and truths.
              </p>
              <p className="text-manifesto text-muted-foreground mb-6">
                We exist in the Kali Yuga — the age of conflict, confusion, and 
                transformation. But darkness is not an end. It's a transition. 
                The moment before the next cycle begins.
              </p>
              <p className="text-manifesto text-foreground font-medium">
                YUGA the brand takes its name from this concept: we are transitional 
                beings, shaped by every age that came before and every age still to come.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Story;
