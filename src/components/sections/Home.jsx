import { RevealOnScroll } from "./RevealOnScroll"

export const Home =()=>{

    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6
                        bg-gradient-to-r from-[oklch(72.3%_0.219_149.579)] to-[oklch(90%_0.25_210)]
                        bg-clip-text text-transparent leading-tight">
                     Hi, I'm Aljazy
            </h1>

            <p classNmae="text-stone-500 text-lg mb-8 max-w-lg mx-auto">
                Aspiring full-stack developer skilled in JavaScript, HTML, and CSS.<br /> 
                 Passionate about building complete web applications and continuously 
                 expanding my front-end and back-end expertise.
            </p>
            <div className="flex justify-center space-x-4">

                <a href="#project" className="bg-emerald-600 text-while py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover: shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View projects
                </a>

                <a href="#contact" className=" boarder border-emerald-600/60 text-emerald-600 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-emerald-600/10">
                   Contact me
                </a>

            </div>

        </div>
        </RevealOnScroll>
    </section>

    )
}