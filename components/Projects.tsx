"use client";

import { motion } from "framer-motion";
import { FaGithub} from 'react-icons/fa';

type Project = {
  title: string;
  stack: string[];
  description: string;
  highlights: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: 'AURA – AI-Driven Autonomous Research Assistant',
    stack: ['Python', 'Flask', 'OpenAI API', 'LangChain', 'NLP'],
    description:
      'Multi-agent research assistant that autonomously explores scientific topics, generates hypotheses, summarizes content, and retains memory.',
    highlights: [
      'Chatbot with memory using LangChain',
      'OpenAI GPT for summarization and reasoning',
      'Flask backend for multi-agent control',
    ],
    imageUrl: '/public/Aura.png',
    githubUrl: 'https://github.com/AishwaryaChandel27/AURA',
    liveUrl: 'https://aura-demo.vercel.app',
  },
  {
    title: 'Cloud Burst Prediction System',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Streamlit'],
    description:
      'Machine learning system that predicts cloudbursts using meteorological data to aid disaster prevention.',
    highlights: [
      'Feature engineering on real-world weather data',
      'Model comparison: Random Forest, XGBoost, etc.',
      'Streamlit-based visual dashboards',
    ],
    imageUrl: '/public/cbp.png',
    githubUrl: 'https://github.com/AishwaryaChandel27/CloudBurst',
    liveUrl: 'https://cloudburst-demo.streamlit.app',
  },
  {
    title: 'Driver Drowsiness Detection System',
    stack: ['Python', 'OpenCV', 'Dlib', 'CNN'],
    description:
      'Real-time system that detects driver fatigue using facial landmark detection and deep learning.',
    highlights: [
      'Eye and head movement detection using OpenCV',
      'CNN-based eye state classifier',
      'Real-time alerts for safety',
    ],
    imageUrl: '/public/ddd.jpg',
    githubUrl: 'https://github.com/AishwaryaChandel27/Driver-Drowsiness-Detection-System',
    liveUrl: 'https://drowsiness-app.vercel.app',
  },
  {
    title: 'Vihaara — Mindful AI Wellness Companion',
    stack: ['React', 'TypeScript', 'Node.js', 'TensorFlow.js', 'Tailwind CSS'],
    description:
      'Vihaara — derived from Sanskrit, meaning lifestyle or mindful dwelling — is your personal sanctuary for mental clarity and emotional well-being.',
    highlights: [
      'AI-powered journaling with insightful analysis',
      'Mood tracking to observe emotional patterns',
      '24/7 AI chat companion for supportive conversations',
      'Personalized daily wellness tips',
      'Access to health advice and mental peace techniques',
    ],
    imageUrl: '/public/Vihaara.png',
    githubUrl: 'https://github.com/yourusername/vihaara',
    liveUrl: 'https://vihaara-app.vercel.app',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="w-full px-6 py-12 md:py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-600 dark:text-green-400 mb-12">
         Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-50 dark:bg-zinc-800 rounded-2xl border border-green-100 dark:border-green-800 shadow-md overflow-hidden flex flex-col"
          >
          <img
             src={project.imageUrl}
             alt={project.title}
              className="w-full h-64 object-contain bg-gray-100 rounded-lg"
           />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-2 flex-grow">
                {project.description}
              </p>
              <p className="text-sm font-medium text-zinc-500 mb-2">
                <strong>Tech Stack:</strong> {project.stack.join(", ")}
              </p>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 mb-4">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex space-x-4 mt-auto">
               <a
                 href={project.githubUrl}
                 target="_blank"
                  rel="noopener noreferrer"
                 className="flex items-center gap-2 text-white hover:text-green-800 dark:hover:text-green-200 transition px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 hover:bg-gray-700"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
