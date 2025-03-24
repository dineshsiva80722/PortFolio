'use client'
import phoneimage from './assets/image/pIoFXjoLRDrLQJSRARfbs0vVs.avif'
import './App.css'
import TextHoverEffect from './components/ui/text-hover-effect'
import Mobileinside from './components/Mobileinside'


const Herosection = () => {


  return (
    <>
      <section className=''>
        <div className="relative">
          <div className="relative z-10 text-white ">
            <div className='absolute  z-40 left-0 right-0 mx-auto top-20 w-72 h-[35rem] '>
              {/* <img className="" src={phoneimage} alt="Phone" /> */}
              <div className='absolute top-5 left-0 right-0 mx-auto w-60 rounded-[2rem] h-[33rem] overflow-hidden'>
                {/* <Mobileinside /> */}
              </div>
            </div>
            <div className="h-[50rem]  place-self-center flex items-center  justify-center">
              <TextHoverEffect text="Web Developer" duration={0.5} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Herosection;
