import { useRef } from 'react';
import React, { useState } from 'react';
import { Menu, X, CircleUserRound } from 'lucide-react';
import './App.css'
import Herosection from './Herosection'
import Explore from './Explore'
import Aboutsection from './Aboutsection'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'
import Project6 from './Project6'
import Project7 from './Project7'
import Project8 from './Project8'
import Contectme from './ContectMe'


const Button = ({ children, className, ...props }: { children: React.ReactNode, className?: string }) => {
  return (
    <button
      className={`px-4 py-2 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({children}) => {
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='sticky  top-5 w-[35.2rem] z-50 h-[3rem]  mx-auto rounded-full overflow-hidden'>
        <div className="w-10 h-[35rem] -top-60 left-64  animate-spin  duration-[1000ms] lg:absolute hidden bg-gradient-to-r from-[#c35aff] to-[#fff] shadow-lg glow mx-auto rounded-full place-self-center">
        </div>
        <div className='bg-[#1E1E1E] text-white hidden md:flex flex-row w-[34.8rem] h-[2.6rem] relative top-[0.2rem] mx-auto rounded-full'>
          <div className='w-10 mx-2 cursor-pointer flex items-center justify-center'>
            <CircleUserRound className="w-8 h-8" />
          </div>
          <ul className='flex relative left-10 gap-10 justify-around text-center align-middle items-center'>
            <li className='cursor-pointer' onClick={scrollToTop}>Home</li>
            <li className='cursor-pointer' onClick={scrollToAbout}>About</li>
            <li className='cursor-pointer' onClick={scrollToProject}>Projects</li>
            <li className='cursor-pointer' onClick={scrollToContact}>Contact</li>
          </ul>
          <Button className='rounded-xl bg-transparent relative text-violet-600 hover:bg-transparent hover:text-violet-100 left-16 top-[0.1rem]'>
            Download
          </Button>
        </div>

        <div className='md:hidden '>
          <div className='bg-black w-96   text-white px-4 py-2 flex justify-between items-center'>
            <div className='w-8 cursor-pointer flex items-center justify-center'>
              <CircleUserRound className="w-6 h-6" />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-white p-2 focus:outline-none'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

          {/* Mobile Menu */}
          <div className={`
          fixed inset-0 bg-[#1E1E1E] z-50 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          top-[4rem]
        `}>
            <div className='flex  flex-col w-96 h-full'>
              <ul className='flex flex-col space-y-4 p-6'>
                <li className='cursor-pointer text-white text-lg border-b border-gray-700 pb-2'
                  onClick={() => {
                    scrollToTop();
                    setIsMenuOpen(false);
                  }}>
                  Home
                </li>
                <li className='cursor-pointer text-white text-lg border-b border-gray-700 pb-2'
                  onClick={() => {
                    scrollToAbout();
                    setIsMenuOpen(false);
                  }}>
                  About
                </li>
                <li className='cursor-pointer text-white text-lg border-b border-gray-700 pb-2'
                  onClick={() => {
                    scrollToProject();
                    setIsMenuOpen(false);
                  }}>
                  Projects
                </li>
                <li className='cursor-pointer text-white text-lg border-b border-gray-700 pb-2'
                  onClick={() => {
                    scrollToContact();
                    setIsMenuOpen(false);
                  }}>
                  Contact
                </li>
              </ul>
              <div className='px-6 mt-4'>
                <Button className='w-full rounded-xl bg-violet-600 text-white hover:bg-violet-700'>
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-cover h-screen -mt-20 p-10 sticky top-0'>
        <Herosection />
      </section>

      <section ref={aboutRef} className='z-10 bg-gradient-to-t from-black to-black/0 relative'>
        <Aboutsection />
        <Explore />
      </section>
      {/* <section className='z-10 h-[40rem] relative'>
      </section> */}
      <main className="relative">
        <section ref={projectRef} className="min-h-screen bg-black sticky top-0 w-full z-10">
          <Project1 />
        </section>
        <section className="min-h-screen bg-black sticky top-0 w-full z-10">
          <Project2 />
        </section>
        <section className="min-h-screen bg-black sticky top-0 w-full z-10">
          <Project3 />
        </section>
        <section className="min-h-screen bg-black sticky top-0 w-full z-10">
          <Project4 />
        </section>
        <section className="min-h-screen bg-black sticky top-0 w-full z-10">
          <Project5 />
        </section>
        <section className="min-h-screen bg-black sticky top-0 w-full z-10">
          <Project6 />
        </section>
        <section className="min-h-screen bg-black sticky top-0 w-full z-10">
          <Project7 />
        </section>
        <section className="min-h-screen bg-black sticky top-0 w-full z-10">
          <Project8 />
        </section>
        <section ref={contactRef} className="h-[25rem] bg-white sticky top-0 w-full z-10">
          <Contectme />
        </section>
      </main>
    </>
  )
}

export default App
