

const Project1 = () => {
    const content = {
        title: "project",
        projecttitle: "title1",
        projectcont: "Lorem ipsum dolor sit amet consectetur adipisicing elitSunt iure fugit odio voluptate ducimus quibusdam officiis, eaque, illo, quas voluptatum architecto quos natus odit dolorum perferendis minus! Laboriosam,consequuntur neque!",
    }
    return (
        <>
            <section className='bg- pt-40 z-10 h-screen flex text-white gap-20 justify-center ' >
                <div className='w-[40rem] h-[35rem] p-5 '>
                    <h1 className='text-xl font-bold bg-white/40 w-32 text-center py-1 rounded-3xl border-4 border-white'>{content.title}</h1>
                    <h1 className=' w-full h-80 font-bold text-center  overflow-hidden my-1 text-[20rem]'>01</h1>
                    <h1 className='text-lg font-bold py-5'>{content.projecttitle}</h1>
                    <p className='text-justify'>{content.projectcont}
                    </p>
                </div>
                <div className='w-[40rem] h-[45rem] bg-slate-500 rounded-[6rem]'>
                </div>
            </section>

        </>
    )
}

export default Project1