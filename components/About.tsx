"use client";

import { Typewriter } from 'react-simple-typewriter';

const About: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/profile.jpg" // Make sure this image is in your `public` folder as `public/aishwarya.jpg`
            alt="Aishwarya Chandel"
            className="rounded-2xl shadow-lg w-80 h-110 object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-green-600 dark:text-green-400 ">
            <Typewriter
              words={['About Me']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            I'm <span className="font-semibold">Aishwarya Chandel</span>, a passionate and detail-oriented AI and Full-Stack Developer currently pursuing a Master of Computer Applications from GH Raisoni University.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            I specialize in building responsive frontend experiences with <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>, and crafting backend solutions using <strong>Node.js</strong> and <strong>Flask</strong>.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            As a Software Developer Intern at <strong>Capital Rush</strong>, I developed over 15+ responsive web pages, reusable components, and integrated RESTful APIs—boosting performance and user retention significantly.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            I enjoy solving real-world problems through technology—whether it's building AI-powered research tools or developing disaster prediction models. I'm always eager to learn and contribute meaningfully.
          </p>

          <p className="text-lg leading-relaxed">
            Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/aishwaryachandel"
              className="text-green-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            <br/>
            or explore my projects on{' '}
            <a
              href="https://github.com/AishwaryaChandel27"
              className="text-green-600  underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
