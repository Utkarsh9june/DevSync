import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 text-white relative px-6 md:px-12 py-[150px] overflow-hidden "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[
          {
            top: "10%",
            left: "15%",
            delay: 0,
            sizeClass: "w-6 h-6",
            color: "text-yellow-300",
          },
          {
            top: "25%",
            left: "70%",
            delay: 0.5,
            sizeClass: "w-6 h-6",
            color: "text-blue-400",
          },
          {
            top: "50%",
            left: "30%",
            delay: 1,
            sizeClass: "w-5 h-5",
            color: "text-purple-400",
          },
          {
            top: "65%",
            left: "80%",
            delay: 0.8,
            sizeClass: "w-5 h-5",
            color: "text-blue-300",
          },
          {
            top: "80%",
            left: "20%",
            delay: 1.2,
            sizeClass: "w-6 h-6",
            color: "text-white",
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            className={`absolute ${s.color} ${s.sizeClass} opacity-60`}
            style={{ top: s.top, left: s.left }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[500px] md:h-[500px] top-[100px] left-1/3 -translate-x-1/2 -translate-y-1/2 rotate-[25deg] pointer-events-none z-0"
        animate={{
          y: [10, 0, 10],
          x: [20, 0, 20],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Rocket className="w-full h-full opacity-20 text-blue-800" />
      </motion.div>
      <div className="relative z-10 mt-10 md-mt-20">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-center font-mono mb-20"
          initial={{ y: -40, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Level up your developer flow with
          <span className="text-blue-400 font-extrabold"> DevSync</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300 text-center font-semibold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          From focused work to task tracking, DevsSync is your AI-powered
          productivity hub built specifically for developers.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row jusify-center items-center gap-4 px-[635px] mb-12 mt-12"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            className="text-xl px-6 py-6 rounded-xl hover:bg-blue-700"
            onClick={() => navigate("/dashboard")}
          >
            🚀 Get Started
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
