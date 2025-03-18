

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import zoro from "../assets/zoro.png";
import { FaJava, FaJs, FaPython, FaReact, FaNodeJs, FaAngular, FaGithub } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiRedux, SiGraphql, SiFastapi, SiTailwindcss, SiMongodb, SiMysql, SiRedis, SiApachekafka, SiPostgresql, SiRabbitmq } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const zoroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      zoroRef.current,
      { opacity: 0, x: -80, scale: 0.85 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: zoroRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.to(zoroRef.current, {
      y: "-10px",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.utils.toArray(".skill-icon").forEach((icon, i) => {
      gsap.fromTo(
        icon,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  const skills = [
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaReact />, name: 'ReactJS' },
    { icon: <FaNodeJs />, name: 'NodeJS' },
    { icon: <SiExpress />, name: 'ExpressJS' },
    { icon: <SiNextdotjs />, name: 'NextJS' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    { icon: <FaAngular />, name: 'Angular' },
    { icon: <SiFastapi />, name: 'FastAPI' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiRedis />, name: 'Redis' },
    { icon: <SiApachekafka />, name: 'Kafka' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiRabbitmq />, name: 'RabbitMQ' }
  ];

  return (
    <section ref={skillsRef} className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-20 relative pt-10">
      {/* Left Side - Zoro Image */}
      <div className="flex justify-center w-full md:w-1/2">
        <img
          ref={zoroRef}
          src={zoro}
          alt="Zoro"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] object-contain z-10 drop-shadow-2xl"
        />
      </div>

      {/* Right Side - Skills & Stack */}
      <div className="flex-1 space-y-6 text-center md:text-right w-full md:w-1/2">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug text-green-400">
          My Skills
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 md:gap-6 text-white mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-icon flex flex-col items-center text-lg sm:text-xl opacity-0 translate-y-10 hover:scale-110 transition-transform duration-300 hover:text-green-400"
            >
              {skill.icon}
              <span className="mt-2 text-xs sm:text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Green Glow Effect */}
      <div className="absolute inset-0 bg-green-glow pointer-events-none"></div>
    </section>
  );
};

export default Skills;