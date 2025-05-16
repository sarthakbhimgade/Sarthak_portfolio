
// import { useEffect, useRef } from 'react';
// import VanillaTilt from 'vanilla-tilt';
// import sanji from '../assets/sanji.png';

// const experiences = [
//   {
//     role: 'Software Developer Engineer',
//     company: 'Decimal Point Analytics',
//     duration: 'Mar 2024 – Present',
//     description: [
//       'Reduced API time by 70% by implementing Redis cache with parallel processing for 10k+ requests, leading to 2x throughput',
//       'Improved data fetching speed by developing FastAPI-MongoDB microservices, resulting in 50k+ records processed in 30 seconds',
//       'Decreased database query time to 80% by architecting pixel tracking with Pandas, ElasticSearch, and Redis for 20k+ records',
//     ],
//     techStack: 'ReactJS, Python, FastAPI, MongoDB, Microservices, Kafka, Redis, ElasticSearch, Pandas',
//   },
//   {
//     role: 'Frontend Developer',
//     company: 'Freelancer',
//     duration: 'Jun 2023 – Dec 2023',
//     description: [
//       'Increased lead generation by 40% by building ReactJS SPA with server-side rendering, resulting in enhanced site performance',
//       'Enhanced user engagement by developing seamless navigation with React-Router-Dom and dynamic routing implementation',
//       'Reduced codebase by 30% by developing atomic design system with Tailwind CSS, achieving 90% user satisfaction rate',
//     ],
//     techStack: 'JavaScript, ReactJS, React-Router-Dom, Tailwind CSS, BootStrap',
//   },
//   {
//     role: 'Software Developer Intern',
//     company: 'Desi QnA',
//     duration: 'Feb 2023 – Mar 2023',
//     description: [
//       'Decreased unauthorized access by 70% by implementing JWT-based MFA with reCAPTCHA, enhancing platform security',
//       'Improved response time by 50% by optimizing data retrieval with O(1) HashMap lookup, supporting peak load operations',
//       'Achieved 90% bot detection accuracy by developing fraud detection algorithms while reducing CPU usage by 30%',
//     ],
//     techStack: 'Java, JavaScript, Data Structures and Algorithms',
//   },
// ];

// const WorkExperience = () => {
//   const tiltRef = useRef(null);

//   useEffect(() => {
//     if (tiltRef.current) {
//       VanillaTilt.init(tiltRef.current.querySelectorAll('.tilt-card'), {
//         max: 10,
//         speed: 300,
//         glare: true,
//         'max-glare': 0.2,
//       });
//     }
//   }, []);

//   return (
//     <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 md:px-20 relative my-20">
//       <div className="absolute inset-0 bg-yellow-glow opacity-50 pointer-events-none"></div>

//       {/* Left Section: Work Experience */}
//       <div className="w-full lg:w-1/2 space-y-8" ref={tiltRef}>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug text-yellow-400 text-center lg:text-left mb-8">
//           Work Experience
//         </h1>
//         {experiences.map((exp, index) => (
//           <div key={index} className="tilt-card experience-card bg-black p-6 rounded-xl shadow-lg">
//             <h2 className="text-xl sm:text-2xl font-semibold text-white">{exp.role} @ {exp.company}</h2>
//             <p className="text-xs sm:text-sm text-gray-400 mb-3">{exp.duration}</p>
//             <ul className="text-gray-300 space-y-2 list-disc list-inside text-sm sm:text-base">
//               {exp.description.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//             <p className="text-xs text-gray-500 mt-3">{exp.techStack}</p>
//           </div>
//         ))}
//       </div>

//       {/* Right Section: Sanji Image */}
//       <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
//         <img 
//           src={sanji} 
//           alt="Sanji" 
//           className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] object-contain z-10 drop-shadow-2xl"
//         />
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import sanji from "../assets/sanji.png";

const experiences = [
  {
    role: "Software Developer Engineer",
    company: "Decimal Point Analytics",
    duration: "Mar 2024 – Present",
    description: [
      "Reduced API time by 70% by implementing Redis cache with parallel processing for 10k+ requests, leading to 2x throughput",
      "Improved data fetching speed by developing FastAPI-MongoDB microservices, resulting in 50k+ records processed in 30 seconds",
      "Decreased database query time to 80% by architecting pixel tracking with Pandas, ElasticSearch, and Redis for 20k+ records",
      "Designed and refined prompt engineering solutions for complex problem statements, significantly improving solution accuracy",
      "Managed data processing workflows on AWS EC2 and S3, implementing auto-scaling policies reducing operational costs by 25%",
      "Wrote Python scripts to fetch data into Excel from servers, reducing analytics team’s manual workload by 30%"
    ],
    techStack:
      "ReactJS, Python, FastAPI, MongoDB, Microservices, Kafka, Redis, ElasticSearch, Pandas",
  },
  {
    role: " Frontend Developer & Founder",
    company: "SNS Web",
    duration: "May 2023 – Feb 2024",
    description: [
      "Designed and delivered production-grade websites for small and medium businesses using React.js and frontend technologies",
      "Enhanced user engagement by developing seamless navigation with React-Router-Dom and dynamic routing implementation",
      "Built components with Tailwind CSS, accelerating development velocity and ensuring UI consistency across multiple projects",
      "Implemented and optimized frontend components, reducing initial page load time by 2 seconds and improving Lighthouse scores"
    ],
    techStack: "JavaScript, ReactJS, React-Router-Dom, Tailwind CSS, BootStrap",
  },
  {
    role: "Software Developer Intern",
    company: "Desi QnA",
    duration: "Feb 2023 – Mar 2023",
    description: [
      "Developed responsive web interfaces using HTML5, CSS3, and JavaScript that served 2,000+ monthly active users",
      "Integrated Google reCAPTCHA and email domain filters to block fake signups, reducing spam registrations by 85%",
      "Designed backend logic in PHP and MySQL with domain validation using a HashMap, improving registration speed and security",
      "Created data sanitation scripts that improved platform reliability and reduced manual moderation requirements"
    ],
    techStack: "HTML5, CSS, JavaScript, MySQL, Data Structures and Algorithms",
  },
];

const WorkExperience = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current.querySelectorAll(".tilt-card"), {
        max: 10,
        speed: 300,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 md:px-20 relative my-20">
      <div className="absolute inset-0 bg-yellow-glow opacity-50 pointer-events-none"></div>

      {/* Left Section: Work Experience */}
      <motion.div
        className="w-full lg:w-1/2 space-y-8"
        ref={tiltRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug text-yellow-400 text-center lg:text-left mb-8">
          Work Experience
        </h1>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="tilt-card experience-card bg-black p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              {exp.role} @ {exp.company}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-3">{exp.duration}</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside text-sm sm:text-base">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-3">{exp.techStack}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Section: Sanji Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.img
          src={sanji}
          alt="Sanji"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] object-contain z-10 drop-shadow-2xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default WorkExperience;
