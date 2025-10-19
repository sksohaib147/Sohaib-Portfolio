export const AboutSection = () => {

    return(

        <section id="about" className= "py-24 px-4 relative">
            {" "}

            <div className=" container max-w-5xl mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me </span>
                </h2>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold" >
                            Web Developer
                        </h3>

                        <p className="text-muted-foreground">
                            Passionate about building user-friendly and efficient web applications
                            
                            </p>

                            <p className="text-muted-foreground">
                            Passionate about building user-friendly and efficient web applications
                            
                            </p>

                            <div className="flex flex-col sm:flex-row  gap-4 pt-4 justify-center ">


                            <a href ="#contact" className="cosmic-button"> {" "}Get in touch </a>


                                <a href ="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> {" "}Download CV


                                </a>

                            </div>

                    </div>

                    <div>
                        
                    </div>

                </div>

            </div>
            
        </section>

    )

}