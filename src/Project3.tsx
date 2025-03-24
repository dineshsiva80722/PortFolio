
// import shadcnport from './assets/image/shadcnport.jpg'
// const Project3 = () => {
//     const content = {
//         title: "project",
//         projecttitle: "ShadCN Portfolio – Minimal & Modern",
//         projectcont: "This portfolio project is built entirely with ShadCN components, ensuring a sleek, modern, and accessible UI. It features a dynamic layout with smooth animations, interactive sections, and a responsive design. Showcasing my projects, skills, and contact details, this portfolio reflects my expertise in frontend development using React and Tailwind.",
//     }
//     const handleClick = () => {
//         window.open("https://shad-cn-ui-three.vercel.app/", "_blank");
//     }
//     return (
//         <>
//             <section className=' pt-20 z-10 h-screen flex text-white gap-20 justify-center ' >
//                 <div className='w-[40rem] h-[35rem] p-5 '>
//                     <h1 className='text-xl font-bold bg-black w-32 text-center py-1 rounded-3xl border-4 border-white'>{content.title}</h1>
//                     {/* <h1 className=' w-full h-80 font-bold text-center  bg-gradient-to-b from-black to-black/50 bg-white/20 overflow-hidden my-1 text-[19rem]'>02</h1> */}
//                     <div className=" bg-black h-96 overflow-hidden flex items-center justify-center">
//                         <div className="relative">
//                             <span className="text-[20rem] relative top-20  font-bold bg-gradient-to-b from-white via-white/50 to-transparent bg-clip-text text-transparent select-none tracking-tighter">
//                                 03
//                             </span>
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
//                         </div>
//                     </div>
//                     <h1 className='text-lg font-bold py-5'>{content.projecttitle}</h1>
//                     <p className='text-justify'>{content.projectcont}
//                     </p>
//                 </div>
//                 <div onClick={handleClick} className='w-[40rem] cursor-pointer backdrop-blur-lg  overflow-hidden  h-[45rem]  rounded-[6rem]'>
//                     <img src={shadcnport} className='object-cover relative top-44' alt="" />
//                 </div>
//             </section>

//         </>
//     )
// }

// export default Project3


import React from 'react';
import { Palette } from 'lucide-react';
import shadcnport from './assets/image/shadcnport.jpg'


export default function Project3() {
    const content = {
        title: "project",
        projecttitle: "ShadCN Portfolio – Minimal & Modern",
        projectcont: "This portfolio project is built entirely with ShadCN components, ensuring a sleek, modern, and accessible UI. It features a dynamic layout with smooth animations, interactive sections, and a responsive design. Showcasing my projects, skills, and contact details, this portfolio reflects my expertise in frontend development using React and Tailwind.",
    }
    const handleClick = () => {
        window.open("https://shad-cn-ui-three.vercel.app/", "_blank");
    }

    return (
        <section className='relative pt-20 z-10 min-h-screen flex lg:flex-row flex-col text-white gap-8 lg:gap-20 justify-center px-4 lg:px-0'>
            {/* Background image for mobile and tablet */}
            <div className='absolute inset-0 lg:hidden'>
                <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10' />
                <img
                    src={shadcnport}
                    alt=""
                />
            </div>

            {/* Content */}
            <div className='w-full lg:w-[40rem] lg:h-[35rem] p-5 relative z-20'>
                <div className='flex items-center gap-4 mb-4'>
                    <Palette className="w-8 h-8" />
                    <h1 className='text-xl font-bold bg-black/50 backdrop-blur-sm lg:bg-black w-32 text-center py-1 rounded-3xl border-2 border-white'>
                        {content.title}
                    </h1>
                </div>
                <div className="bg-black/30 lg:bg-black backdrop-blur-sm lg:backdrop-blur-none h-64 lg:h-96 overflow-hidden flex items-center justify-center">
                    <div className="relative">
                        <span className="text-[10rem] lg:text-[20rem] relative lg:top-20 font-bold bg-gradient-to-b from-white via-white/50 to-transparent bg-clip-text text-transparent select-none tracking-tighter">
                            03
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
                <div className='mt-6 p-4 bg-black/30 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-2xl lg:rounded-none lg:p-0'>
                    <h1 className='text-xl py-2'>{content.projecttitle}</h1>
                    <p className='text-justify text-gray-300 text-sm lg:text-base'>{content.projectcont}</p>
                </div>
            </div>

            {/* Project image - hidden on mobile, visible on desktop */}
            <div
                onClick={handleClick}
                className='hidden lg:block w-[40rem] h-[600px] cursor-pointer backdrop-blur-lg overflow-hidden rounded-[1rem] relative group'
            >
                <img
                    src={shadcnport}
                    className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300'
                    alt="Design System Library"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
        </section>
    );
}