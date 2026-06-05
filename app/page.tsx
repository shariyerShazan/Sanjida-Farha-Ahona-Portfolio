"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  Cat, 
  Plane, 
  Heart, 
  Cpu, 
  GraduationCap, 
  User, 
  Sparkles, 
  Moon, 
  Star,
  Quote
} from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="relative min-h-screen md:h-screen w-full flex items-center justify-center animated-bg p-2 md:p-8">
      {/* Outer Border Frame */}
      <div className="absolute inset-2 md:inset-8 portfolio-border rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none z-10" />

      {/* Main Container Card */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="glass-card w-full max-w-6xl h-auto md:h-full max-h-none md:max-h-[850px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative z-0"
      >
        {/* Left Side: Profile & Basics */}
        <div className="w-full md:w-1/3 bg-white/20 p-6 md:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/30">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-32 h-32 md:w-56 md:h-56 rounded-full p-1.5 md:p-2 bg-gradient-to-tr from-lavender-base to-pink-pastel shadow-xl mb-4 md:mb-6"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-white">
              <Image
                src="/ahona.jpg"
                alt="Sanjida Farha Khan Ahona"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-1"
          >
            Ahona
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-base md:text-lg text-gray-600 mb-4 font-medium"
          >
            Sanjida Farha Khan Ahona
          </motion.p>

          <motion.div 
            variants={fadeIn}
            className="flex flex-col gap-3 w-full"
          >
            <div className="bg-lavender-light text-lavender-base px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-sm">
              <GraduationCap size={18} />
              CSE Student
            </div>
            <div className="bg-blue-light text-blue-soft px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-sm">
              <Sparkles size={16} className="text-yellow-500 animate-pulse" />
              Enjoying Life ✨
            </div>
          </motion.div>

          <div className="mt-auto pt-8">
            <div className="flex gap-4 justify-center text-gray-400">
              <Heart className="hover:text-pink-pastel cursor-pointer transition-colors" />
              <Star className="hover:text-yellow-400 cursor-pointer transition-colors" />
              <Moon className="hover:text-blue-soft cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Content */}
        <div className="w-full md:w-2/3 p-6 md:p-12 md:overflow-y-auto scrollbar-hide flex flex-col gap-8">
          {/* About Me Section */}
          <motion.section variants={staggerContainer} initial="hidden" animate="visible">
            <div className="flex items-center gap-2 mb-4">
              <User className="text-lavender-base" />
              <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base bg-white/30 p-5 rounded-2xl border border-white/50 text-balance">
              I am a passionate Computer Science student who enjoys learning new technologies and exploring creative ideas. 
              I love spending time with my family and creating meaningful memories. I enjoy traveling and discovering 
              new places, which helps me gain new experiences and perspectives. I am grateful for the beautiful 
              life Allah has blessed me with and always try to move forward with positivity, kindness, and faith.
            </p>
          </motion.section>

          {/* Education & Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <motion.section variants={fadeIn} className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="text-blue-soft" />
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white/40 p-4 rounded-xl border border-white/40 hover:bg-white/60 transition-all flex flex-col gap-1">
                  <span className="text-xs font-bold text-blue-soft uppercase tracking-wider">HSC</span>
                  <span className="text-sm font-semibold text-gray-700">Dhaka Commerce College</span>
                </div>
                <div className="bg-white/40 p-4 rounded-xl border border-white/40 hover:bg-white/60 transition-all flex flex-col gap-1">
                  <span className="text-xs font-bold text-lavender-base uppercase tracking-wider">B.Sc. in CSE</span>
                  <span className="text-sm font-semibold text-gray-700">Southeast University</span>
                </div>
              </div>
            </motion.section>

            {/* Interests */}
            <motion.section variants={fadeIn} className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-pink-pastel" />
                <h3 className="text-xl font-bold text-gray-800">Interests</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Cat size={18} />, label: "Cats" },
                  { icon: <Plane size={18} />, label: "Traveling" },
                  { icon: <Heart size={18} />, label: "Family" },
                  { icon: <Cpu size={18} />, label: "Tech" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/40 p-3 rounded-xl border border-white/40 flex items-center justify-center gap-2 text-gray-700 font-medium text-sm"
                  >
                    {item.icon}
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Islamic Inspiration Section */}
          <motion.section 
            variants={fadeIn}
            className="bg-gradient-to-br from-lavender-light/50 to-blue-light/50 p-6 rounded-2xl border border-white/60 relative overflow-hidden group"
          >
            <div className="absolute top-2 right-4 text-white/40 group-hover:text-white/60 transition-colors">
              <Quote size={40} />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-gray-700 font-medium italic">"Alhamdulillah for every blessing in my life."</p>
                <p className="text-gray-700 font-medium italic">"My faith gives me strength, patience, and gratitude."</p>
                <div className="h-px w-full bg-white/50 my-2" />
                <p className="text-lavender-base font-bold text-lg">"Indeed, with hardship comes ease."</p>
                <p className="text-xs text-gray-500 font-semibold tracking-widest">(Quran 94:6)</p>
              </div>
              <p className="text-sm text-gray-600 font-medium ">
                Trying to live each day with kindness, sincerity, and trust in Allah.
              </p>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer 
            variants={fadeIn}
            className="mt-auto pt-6 text-center text-gray-400 text-xs italic font-medium"
          >
            Made with gratitude, faith, and dreams ✨
          </motion.footer>
        </div>
      </motion.div>
    </main>
  );
}
