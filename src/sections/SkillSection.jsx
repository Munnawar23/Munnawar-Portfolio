import { SKILLS } from '../constants/skillSectionData';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiReact, SiGreensock } from 'react-icons/si';

const iconMap = {
  "React Native": <SiReact className="text-4xl lg:text-6xl text-cyan-400" />,
  "React.js": <SiReact className="text-4xl lg:text-6xl text-blue-500" />,
  "Next.js": <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
  "Node.js": <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
  "MongoDB": <SiMongodb className="text-4xl lg:text-6xl text-green-500" />,
  "GSAP": <SiGreensock className="text-4xl lg:text-6xl text-green-300" />
};

const SkillsSection = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
      <div className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
        {SKILLS.map((skill, index) => (
          <div key={index} className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {iconMap[skill.name]}
              <h3 className="text-xl lg:text-3xl">{skill.name}</h3>
            </div>
            <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
              {skill.experience}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
