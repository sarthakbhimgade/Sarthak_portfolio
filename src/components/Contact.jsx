import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import bb from "../assets/bb.png";

const contactLinks = [  
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/sarthak-bhimgade-bb6734192/" },
  { icon: <FaGithub />, label: "GitHub", url: "https://github.com/sarthakbhimgade" },
  { icon: <SiLeetcode />, label: "LeetCode", url: "https://codeforces.com/profile/sarthakbhimgade" },
  { icon: <SiCodeforces />, label: "CodeForces", url: "https://auth.geeksforgeeks.org/user/bhimgadesarthak27" },
  { icon: <SiGeeksforgeeks />, label: "GeeksForGeeks", url: "https://auth.geeksforgeeks.org/user/sarthakbhimgade" },
  { icon: <FaEnvelope />, label: "Email", url: "mailto:sarthakbhimgade12@gmail.com" },

];

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
    else setAnimate(false);
  }, [inView]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-20 gap-10">
      <div className="absolute inset-0 bg-blue-glow opacity-50 pointer-events-none"></div>
      
      {/* Contact Card */}
      <motion.div
        className="flex flex-col space-y-6 text-white bg-black bg-opacity-50 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-xl border border-gray-600 w-full sm:max-w-md lg:max-w-lg text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#00ffff] mb-4 font-handwriting">
          Let's Talk!!
        </h1>

        <div className="space-y-4 text-left">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-lg md:text-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -50 }}
              animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="text-2xl md:text-3xl transition-all duration-300 hover:text-[#00ffff] hover:bg-[#00ffff33] rounded-full p-2">
                {link.icon}
              </span>
              <span className="hover:text-[#00ffff] transition-all duration-300">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1OFPD43ebbMHcC8eYqFnk7DY2Q68Fer1y/view"
          className="text-lg font-semibold text-white underline hover:text-[#00ffff] transition-all duration-300 text-center"
          download
          target="_blank"
  rel="noopener noreferrer"
        >
          📄 Download Resume
        </a>
        <p className="text-sm text-gray-400 mt-4">
    &copy; Made by Sarthak Bhimgade
  </p>
      </motion.div>

      {/* Blackbeard Image - Enhanced Floating Effect */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <motion.img
          src={bb}
          alt="Blackbeard"
          className="w-64 sm:w-80 md:w-[450px] lg:w-[550px] drop-shadow-2xl z-10"
          initial={{ opacity: 0, y: -50, rotate: -5 }}
          animate={animate ? { opacity: 1, y: [0, -10, 0], rotate: [0, 5, -5, 0] } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>
    </section>
  );
};

export default Contact;

