
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLink, FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import mihawk from "../assets/mihawk.png";
// import next from "../assets/next.png";
// import yt from "../assets/yt.png";
// import mw from "../assets/mw.png";

// const ProjectCard = ({ title, techStack, githubLink, liveLink, image }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       className="bg-black bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-xl flex flex-col items-center border border-gray-700 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
//     >
//       <motion.img
//         src={image}
//         alt={title}
//         className="w-full h-auto rounded-md shadow-lg"
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.3 }}
//       />
//       <h3 className="text-xl font-semibold text-white mt-4 text-center">{title}</h3>
//       <div className="flex flex-wrap gap-2 mt-4 justify-center">
//         {techStack.map((tech, index) => (
//           <motion.span
//             key={index}
//             className="bg-gray-800 text-sm px-3 py-1 rounded-md font-semibold text-gray-300 border border-gray-600"
//             whileHover={{ scale: 1.1 }}
//           >
//             {tech}
//           </motion.span>
//         ))}
//       </div>
//       <div className="flex mt-4 gap-4">
//         {githubLink && (
//           <motion.a
//             href={githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-white"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaGithub size={24} />
//           </motion.a>
//         )}
//         {liveLink && (
//           <motion.a
//             href={liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-white"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaLink size={24} />
//           </motion.a>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// const Projects = () => {
//   const projects = [
//     {
//       title: "ManageWise Clone",
//       techStack: ["ReactJs", "Tailwind css", "JavaScript"],
//       githubLink: "https://github.com/sarthakbhimgade/managewise-clone",
//       liveLink: "https://managewise-clone-opal.vercel.app/",
//       image: mw,
//     },
//     {
//       title: "Next Js Dashboard",
//       techStack: ["ReactJs", "NextJs", "JavaScript"],
//       githubLink: "https://github.com/sarthakbhimgade/NextJs-dashboard",
//       liveLink: "https://next-js-dashboard-tau-six.vercel.app/",
//       image: next,
//     },
//     {
//       title: "YouTube Clone App",
//       techStack: ["ReactJs", "JavaScript", "Tailwind CSS"],
//       githubLink: "https://github.com/sarthakbhimgade/YouTube_clone",
//       liveLink: "https://you-tube-clone-plum-nine.vercel.app/",
//       image: yt,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextProject = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
//   };

//   return (
//     <section className="h-screen flex flex-col lg:flex-row items-center justify-center px-5 md:px-10 lg:px-20 relative pt-10">
//       <div className="absolute inset-0 bg-purple-glow pointer-events-none"></div>

//       {/* Mihawk Image */}
//       <motion.img
//         src={mihawk}
//         alt="Pirate Mihawk"
//         className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] lg:mr-50 -object-contain drop-shadow-2xl mb-10 lg:mb-0"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       />

//       {/* Projects Section */}
//       <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col items-center lg:items-end text-center space-y-6">
//         <motion.h1
//           className="text-4xl md:text-6xl font-bold leading-snug text-purple-900"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           My Projects
//         </motion.h1>

//         <ProjectCard {...projects[currentIndex]} />

//         <div className="flex justify-center gap-6 mt-6">
//           <motion.button
//             onClick={prevProject}
//             className="text-white text-2xl md:text-3xl hover:text-purple-400"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaArrowLeft />
//           </motion.button>
//           <motion.button
//             onClick={nextProject}
//             className="text-white text-2xl md:text-3xl hover:text-purple-400"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaArrowRight />
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLink, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import mihawk from "../assets/mihawk.png";
import next from "../assets/next.png";
import yt from "../assets/yt.png";
import mw from "../assets/mw.png";

const ProjectCard = ({ title, techStack, githubLink, liveLink, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-black bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-xl flex flex-col items-center border border-gray-700 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-auto rounded-md shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="text-xl font-semibold text-white mt-4 text-center">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {techStack.map((tech, index) => (
          <motion.span
            key={index}
            className="bg-gray-800 text-sm px-3 py-1 rounded-md font-semibold text-gray-300 border border-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <div className="flex mt-4 gap-4">
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={24} />
          </motion.a>
        )}
        {liveLink && (
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
            whileHover={{ scale: 1.2 }}
          >
            <FaLink size={24} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "ManageWise Clone",
      techStack: ["ReactJs", "Tailwind css", "JavaScript"],
      githubLink: "https://github.com/sarthakbhimgade/managewise-clone",
      liveLink: "https://managewise-clone-opal.vercel.app/",
      image: mw,
    },
    {
      title: "Next Js Dashboard",
      techStack: ["ReactJs", "NextJs", "JavaScript"],
      githubLink: "https://github.com/sarthakbhimgade/NextJs-dashboard",
      liveLink: "https://next-js-dashboard-tau-six.vercel.app/",
      image: next,
    },
    {
      title: "YouTube Clone App",
      techStack: ["ReactJs", "JavaScript", "Tailwind CSS"],
      githubLink: "https://github.com/sarthakbhimgade/YouTube_clone",
      liveLink: "https://you-tube-clone-plum-nine.vercel.app/",
      image: yt,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={ref} className="h-screen flex flex-col lg:flex-row items-center justify-center px-5 md:px-10 lg:px-20 relative pt-10">
      <div className="absolute inset-0 bg-purple-glow pointer-events-none"></div>

      {/* Mihawk Image */}
      <motion.img
        src={mihawk}
        alt="Pirate Mihawk"
        className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] lg:mr-50 object-contain drop-shadow-2xl mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 1, repeat: Infinity } }}
      />

      {/* Projects Section */}
      <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col items-center lg:items-end text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-snug text-purple-900"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        <ProjectCard {...projects[currentIndex]} />

        <div className="flex justify-center gap-6 mt-6">
          <motion.button
            onClick={prevProject}
            className="text-white text-2xl md:text-3xl hover:text-purple-400"
            whileHover={{ scale: 1.2 }}
          >
            <FaArrowLeft />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="text-white text-2xl md:text-3xl hover:text-purple-400"
            whileHover={{ scale: 1.2 }}
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
