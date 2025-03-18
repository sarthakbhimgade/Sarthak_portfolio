import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import maryGoShip from "../assets/onepiece_logo.png"; // Going Merry ship image

const Loader = ({ onLoaded }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoaded();
    }, 3200); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }} // Fades out at the end
    >
      {/* Ship + "Setting Sail..." Moving Together */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ x: "100vw" }} // Start off-screen (right)
        animate={{ x: "-120vw" }} // Move to the extreme left
        transition={{ duration: 5, ease: "linear" }}
      >
        {/* Ship Image with Sailing Rotation */}
        <motion.img
          src={maryGoShip}
          alt="Going Merry Sailing"
          className="w-32 sm:w-48"
          animate={{
            rotate: [-5, 5, -5], // Rocking effect
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* "Setting Sail..." Text */}
        <motion.p className="text-white text-4xl sm:text-6xl font-bold">
          Setting Sail...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
