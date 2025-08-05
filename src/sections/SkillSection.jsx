import { SKILLS } from "../constants/skillSectionData";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiReact, SiGreensock } from "react-icons/si";
import { motion } from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const itemVarients = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const iconMap = {
  "React Native": <SiReact className="text-4xl lg:text-6xl text-cyan-400" />,
  "React.js": <SiReact className="text-4xl lg:text-6xl text-blue-500" />,
  "Next.js": <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
  "Node.js": <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
  MongoDB: <SiMongodb className="text-4xl lg:text-6xl text-green-500" />,
  GSAP: <SiGreensock className="text-4xl lg:text-6xl text-green-300" />,
};

const SkillsSection = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
      <motion.div
        className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVarients}
        viewport={{ once: true }}
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-8 flex items-center justify-between"
            variants={itemVarients}
          >
            <div className="flex items-center gap-4">
              {iconMap[skill.name]}
              <h3 className="text-xl lg:text-3xl">{skill.name}</h3>
            </div>
            <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
              {skill.experience}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
