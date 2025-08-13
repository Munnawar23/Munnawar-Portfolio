import { WORKS } from "../utils/constants";
import WorkCard from "../components/WorkCard";
import { motion} from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const itemVarients = {
  hidden: { opacity: 0, y: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Works = () => {
  return (
    <div id="works">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVarients}
        viewport={{ once: true }}
      >
        Works
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center py-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVarients}
        viewport={{ once: true }}
      >
        {WORKS.map((work, index) => (
          <motion.div variants={itemVarients} key={index}>
            <WorkCard
              image={work.image}
              title={work.title}
              subtitle={work.subtitle}
              link={work.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Works;
