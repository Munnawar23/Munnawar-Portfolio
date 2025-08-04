import { SOCIAL_MEDIA_LINKS } from "../constants/footerData";
import { FaFacebook, FaDiscord, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const iconMap = {
  Facebook: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  Instagram: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  Discord: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  GitHub: <FaGithub fontSize={25} className="hover:opacity-80" />,
  LinkedIn: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
};

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <figure>
          <img src="/images/logo.png" alt="logo" width={200} className="mb-2" />
          <div className="mb-10 h-3 w-12 bg-yellow-400"></div>
        </figure>
      </div>

      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {iconMap[link.name]}
          </a>
        ))}
      </div>

      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
       &copy; 2025 Munnawar Hussain. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
