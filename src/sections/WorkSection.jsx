import { WORKS } from '../constants/workSectionData';
import WorkCard from '../components/WorkCard';

const WorksSection = () => {
  return (
    <div id="works">
      <h2 className="mt-20 text-center text-4xl font-semibold">Works</h2>
      <div className="flex flex-wrap justify-center py-8">
        {WORKS.map((work, index) => (
          <div key={index}>
            <WorkCard
              image={work.image}
              title={work.title}
              subtitle={work.subtitle}
              link={work.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksSection;
