export const HeroSection = () => {
    return (
        <section id="#hero " className="relative min-h-screen flex flex-col items-center justify-center px-4 ">

            <div className="container max-w-4xl mx-auto z-10 text-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold  tracking-tight" >
                        <span className="opacity-0 animate-fade-in"> Hi , I am</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Sohaib </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Sikandar</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    Frontend Developer focused on creating fast, responsive, and visually appealing web applications using React.js and Tailwind CSS. Experienced in Git and collaborative workflows, with a strong eye for clean UI design and smooth user experience.
                    </p>


                </div>

            </div>

        </section>
    );
};