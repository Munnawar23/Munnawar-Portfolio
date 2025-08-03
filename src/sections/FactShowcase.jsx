import video from "../assets/video.mp4";
import { FACT } from "../constants/data";

const FactShowcase = () => {
  return (
    <div id="fact">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Fact</h2>
      <div className="mx-auto flex max-w-6xl flex-wrap">
        <div className="w-full p-2 sm:w-1/2">
          <video
            className="w-full rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="w-full p-4 text-center sm:w-1/2">
          <h2 className="mb-4 text-3xl">{FACT.title}</h2>
          <span className="mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400">
            {FACT.award}
          </span>
          <p className="m-4 p-2 italic">{FACT.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FactShowcase;
