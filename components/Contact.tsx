"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Contact: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
          <Typewriter
            words={['Get In Touch']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-lg mb-8 leading-relaxed max-w-2xl">
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
        </p>

        <a
          href="aishwaryachandel27@gmail.com"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md transition mb-8"
        >
          Say Hello
        </a>

        <div className="flex gap-8 text-2xl text-green-600 dark:text-green-400">
          <a
            href="https://www.linkedin.com/in/aishwaryachandel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-800 dark:hover:text-green-200 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AishwaryaChandel27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-800 dark:hover:text-green-200 transition"
          >
            <FaGithub />
          </a>
          <a
            href="aishwaryachandel27@gmail.com"
            className="hover:text-green-800 dark:hover:text-green-200 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
