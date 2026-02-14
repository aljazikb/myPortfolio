import { RevealOnScroll } from "./RevealOnScroll";


export const Project =() =>{

   const prayProjectTech = [
  "JavaScript",
  "HTML",
  "CSS",
  "Axios",
  "REST API"
    ];
    const Socialtech = [
    "Vanilla JavaScript",
    "Axios",
    "Bootstrap",
    "REST API",
    "HTML & CSS"
    ];
     
    return (
        <section id="project" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8  bg-gradient-to-r from-[oklch(72.3%_0.219_149.579)] to-[oklch(90%_0.25_210)] 
                    bg-clip-text text-transparent text-center ">
                        Projects
                    
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                            <h3 className="text-xl font-bold mb-2">
                               Prayer Times App
                            </h3>
                            <p className="text-gray-400" mb-4>
                                     A web application that displays daily prayer times based on the selected city. 
                                    It integrates a REST API using Axios to fetch accurate prayer timings 
                                    and presents them in a clean and responsive interface.
                            </p> 

                            <div className="flex flex-wrap gap-2 mb-4">
                                  {prayProjectTech.map((t,Key)=>(
                                       <span 
                                            Key={Key}
                                            className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                                {t}

                                        </span>
                                    ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://pratertime.netlify.app/" className=" group text-emerald-400 hover:text-emerald-300 transition-colors my-4 inline-flex items-center gap-1">
                                    View Project
                                     <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                        arrow_right_alt
                                    </span>
                                </a>

                            </div>
                            
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                            <h3 className="text-xl font-bold mb-2">
                               Social Media Web App
                            </h3>
                            <p className="text-gray-400" mb-4>
                                      A social media–style web application built using Vanilla JavaScript,
                                        Axios, Bootstrap, and REST APIs. The application allows users to
                                        create accounts, share posts, interact with content, and manage
                                        their profiles in a dynamic and responsive interface.

                            </p> 

                            <div className="flex flex-wrap gap-2 mb-4">
                                  {Socialtech.map((t,Key)=>(
                                       <span 
                                            Key={Key}
                                            className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                                {t}

                                        </span>
                                    ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://soicalmediap.netlify.app/" className=" group text-emerald-400 hover:text-emerald-300 transition-colors my-4 inline-flex items-center gap-1">
                                    View Project
                                     <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                        arrow_right_alt
                                    </span>
                                </a>

                            </div>
                            
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                            <h3 className="text-xl font-bold mb-2">
                               To-Do List
                            </h3>
                            <p className="text-gray-400" mb-4>
                                    A web-based To-Do List application that allows users to add, edit, delete, 
                                    and mark tasks as completed. Tasks are saved in localStorage so the list 
                                    persists across browser sessions, providing a seamless user experience.
                             </p> 

                            <div className="flex flex-wrap gap-2 mb-4">
                                  {Socialtech.map((t,Key)=>(
                                       <span 
                                            Key={Key}
                                            className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                                {t}

                                        </span>
                                    ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://todolist-aljazi.netlify.app/" className=" group text-emerald-400 hover:text-emerald-300 transition-colors my-4 inline-flex items-center gap-1">
                                    View Project
                                     <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                        arrow_right_alt
                                    </span>
                                </a>

                            </div>
                            
                        </div>



                    </div>
            </div>
        </RevealOnScroll>
        </section>
    )
}