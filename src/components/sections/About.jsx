import { RevealOnScroll } from "./RevealOnScroll";

export const About=()=>{
    const frontendSkille=[ 
        "React",
        "TailwindCss",
        "Bootstrap"
    ];

    const BackendSkille=[ 
        "Node.js",
        "Java",
        
    ];

    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8  bg-gradient-to-r from-[oklch(72.3%_0.219_149.579)] to-[oklch(90%_0.25_210)] 
                    bg-clip-text text-transparent text-center ">
                    About me
                </h2>

                <div className="rounded-xl p-8 border-while/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I’m passionate about technology and problem-solving. 
                        I enjoy learning how systems work and building web applications from front-end to back-end.
                         My goal is to become a full-stack developer and create real-world solutions that make an impact.
                         I’m constantly learning, improving my skills, and challenging myself with new projects.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">

                            {frontendSkille.map((t,Key)=>(
                               
                                <span 
                                 Key={Key}
                                className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition" >
                                     {t}

                                </span>

                            ))}
                            
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend</h3>
                        <div className="flex flex-wrap gap-2">

                            {BackendSkille.map((t,Key)=>(
                               
                                <span 
                                 Key={Key}
                                className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition" >
                                     {t}

                                </span>

                            ))}
                            
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 boarder hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Eduction</h3>
                            <ul >
                                <li>
                                    <strong>Bachelor in Information Technology (In Progress) </strong> 
                                     <p className="text-sm">– King Abdulaziz University <br />2023 – Present</p> 
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        
        </section>

    )
}