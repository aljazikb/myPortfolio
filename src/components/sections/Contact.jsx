import { RevealOnScroll } from "./RevealOnScroll"
import { useState } from "react"
import emailjs from 'emailjs-com'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa"

export const Contact =()=>{

    const[formDate,setformData]=useState({
        name:"",
        email:"",
        message:"",
    })

   

    const handleSubmit=(e)=>{
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_template_ID, e.target ,import.meta.env.VITE_PUBLIC_KEY)
        .then((req)=>{
            alert("Message Sent");
            setformData({name:"",email:"",message:""})
        }).catch((error)=>{
            alert("Something is wrong");
        })

    }
    return(
        <section id="contact" className="miin-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
                <div className="px-4 w-full md:w-150">

                   

                    <h2 className="text-3xl font-bold mb-8  bg-gradient-to-r from-[oklch(72.3%_0.219_149.579)] to-[oklch(90%_0.25_210)] 
                    bg-clip-text text-transparent text-center "> Get In Touch</h2>

                   <div  className="flex gap-4 space-y-7">
                        <a
                            href="https://github.com/aljazikb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-green-400">
                            <FaGithub size={20} />
                            GitHub
                        </a>
                        
                        
                         <a
                            href="www.linkedin.com/in/aljazy-banaemah-183a983a7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400">
                            <FaLinkedin size={20} />
                            LinkedIn
                        </a>
                       <a
                            href="https://x.com/ALJAZI310" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-black-800 text-white text-lg font-bold hover:bg-green-500 transition-colors"
                            >
                            X
                        </a>

                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500
                                 focus:bg-green-500/5" placeholder="Name.." value={formDate.name} onChange={(e)=>setformData({...formDate,name: e.target.value})}/>

                            </div>
                            <div className="relative">
                                <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500
                                 focus:bg-green-500/5" placeholder="example@gmail.com" value={formDate.email}  onChange={(e)=>setformData({...formDate,email: e.target.value})}/>

                            </div>

                            <div className="relative">
                                <textarea  id="message" name="message" rows={5} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500
                                 focus:bg-green-500/5" placeholder="you message" value={formDate.message} onChange={(e)=>setformData({...formDate,message: e.target.value})}/>

                            </div>

                            <button type="submit" className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                              hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"> 
                                Send Message
                            </button>

                    </form>

                </div>


            </RevealOnScroll>
        </section>
    )
}