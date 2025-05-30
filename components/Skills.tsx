"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiJavascript,
  SiNodedotjs, SiFlask, SiTensorflow, SiHuggingface, SiOpencv,
  SiFirebase, SiMysql, SiGithub, SiPostman, SiVercel, SiStreamlit,
  SiFramer, SiPython, SiTypescript,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { MdOutlinePsychology } from "react-icons/md";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [

    {
    title: "Languages",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
   {
    title: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Google Gemini", icon: <MdOutlinePsychology /> },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <BiSolidMessageAltDetail /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Firestore", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },

  {
    title: "Soft Skills",
    skills: [
      { name: "Collaborative", icon: <MdOutlinePsychology /> },
      { name: "Detail-Oriented", icon: <MdOutlinePsychology /> },
      { name: "Communicative", icon: <MdOutlinePsychology /> },
      { name: "Organized", icon: <MdOutlinePsychology /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="w-full px-6 py-12 md:py-16 bg-white dark:bg-gray-900 rounded-3xl ">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-600 dark:text-green-400 mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-50 dark:bg-zinc-800 rounded-xl p-6 border border-green-100 dark:border-green-800 shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4 border-b border-green-200 dark:border-green-700 pb-2">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
