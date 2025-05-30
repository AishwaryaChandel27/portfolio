"use client";

import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills";
import Projects from "../components/Projects"
import  Contact  from '../components/Contact';

const App = () => {
  return (
   
  <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-black dark:text-white font-sans transition-colors duration-300 overflow-y-scroll hide-scrollbar">
     <Nav/>
     <main className="flex flex-col">
        <section id="hero"><Hero /></section>
  <section id="about"><About /></section>
  <section id="skills"><Skills /></section>
  <section id="projects"><Projects /></section>
  <section id="contact"><Contact /></section>
  </main>
    </div>
  )
}

export default App