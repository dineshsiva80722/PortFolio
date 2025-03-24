
import arrow from './assets/svg/arrow.svg'
import facebbok from './assets/svg/facebook.svg'
import insta from './assets/svg/instagram.svg'
import linkedin from './assets/svg/linkedin.svg'
import logoimage from './assets/image/logo.jpg'


import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const ContectMe = () => {
    return (
        <>
            <section>
        
                <div className="flex items-center place-self-center gap-2  relative top-10 transition-all hover:top-0">
                    <span className="text-7xl md:text-8xl  lg:text-[12rem]  font-extrabold bg-gradient-to-r from-black via-gray-600 to-gray-500/50 bg-clip-text text-transparent">
                        Contact Me
                    </span>
                    <img className='size-40 lg:block hidden' src={arrow} alt="" />
                </div>

                <div className='links  w-full h-20 mx-auto   relative top-24' >
                    <div className='socialliks w-96  lg:flex hidden gap-5 relative align-middle py-1 items-center left-[21rem]'>
                        <img className='size-7' src={linkedin} alt="" />
                        <img className='size-7' src={insta} alt="" />
                        <img className='size-7' src={facebbok} alt="" />
                    </div>
                    <hr className='w-full mx-auto' />
                    <div className="w-10 left-[21rem] lg:flex hidden py-3   ga-10 align-middle items-center relative">
                        <img className='rounded-full ' src={logoimage} alt="" />
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button variant="link">@Dinesh</Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="lg:flex justify-between space-x-4">
                                    <Avatar>
                                        <AvatarImage src={logoimage} />
                                        <AvatarFallback>VC</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-0">
                                        <h4 className="text-sm font-semibold">@Dinesh</h4>
                                        <p className="text-sm">
                                            Code is like humor, when you have to explain it, it's bad.
                                        </p>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <a  className='mx-10' href="mailto:dineshsiva693@gmail.com">dineshsiva693@gmail.com</a>
                        <a href="Mobile:9342977856">9342977856</a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ContectMe