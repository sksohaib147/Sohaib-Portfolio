import React from 'react';
import { Code, User, Briefcase } from "lucide-react";



export const AboutSection = () => {

    return(

        <section id="about" className= "py-24 px-4 relative">
            {" "}

            <div className=" container max-w-5xl mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me </span>
                </h2>

                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-6">
                        Web Developer
                    </h3>

                    <p className="text-muted-foreground mb-8 text-lg">
                        Passionate about building user-friendly and efficient web applications
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => {
                                    const element = document.querySelector('#contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="cosmic-button cursor-pointer"
                            >
                            Get in touch 
                        </button>

                                <a 
                                    href="https://drive.google.com/file/d/1Mh5FLaJKjz2-1Il5BomuwaHk_hxIYjxI/view?usp=sharing"
                                    target="_blank"
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
                                >
                            Download CV
                        </a>
                    </div>
                </div>

            </div>
            
        </section>

    )

}