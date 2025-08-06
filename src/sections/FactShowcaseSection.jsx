import { FACT } from "../constants/factShowcaseSectionData";
import { motion } from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
};

const itemVarients = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const FactShowcaseSection = () => {
  return (
    <div id="fact">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Fact</h2>
      <motion.div
        className="mx-auto flex max-w-6xl flex-wrap"
        initial="hidden"
        whileInView="visible"
        variants={containerVarients}
        viewport={{ once: true }}
      >
        <motion.div className="w-full p-2 sm:w-1/2" variants={itemVarients}>
          <video className="w-full rounded-lg" autoPlay muted loop playsInline>
            <source src="/videos/showcase-video.webm" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={itemVarients}
          className="w-full p-4 text-center sm:w-1/2"
        >
          <h2 className="mb-4 text-3xl">{FACT.title}</h2>
          <span className="mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400">
            {FACT.award}
          </span>
          <p className="m-4 p-2 italic">{FACT.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FactShowcaseSection;
