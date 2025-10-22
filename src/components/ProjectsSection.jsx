import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Paws and Claws",
        description: "A comprehensive pet marketplace and adoption platform designed for pet lovers. Features pet listings, adoption services, and e-commerce functionality for pet supplies. Built with modern web technologies to provide a seamless experience for pet owners and potential adopters.",
        image: "/Projects/project1.png",
        tags: ["React", "JavaScript", " Tailwind CSS"],
        demoUrl: "https://gorgeous-bunny-c0c1fc.netlify.app/",
        githubUrl: "https://github.com/sksohaib147/fypproject",

    },

    {
      id: 2,
      title: "Gemini Clone",
      description:
        "A modern AI-powered chat application built with React and advanced natural language processing. Features real-time conversations, intelligent responses, and seamless user experience. Designed to replicate the functionality of Google's Gemini AI with custom styling and enhanced performance.",
      image: "/Projects/project2.png",
      tags: ["React Js", "CSS"],
      demoUrl: "https://tangerine-malasada-04094e.netlify.app/",
      githubUrl: "https://github.com/sksohaib147/Gemini-1",
    },
   
]


export  function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4  ">  {" "}
          Featured {" "}
          <span className="text-primary">Projects </span>

        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">  Projects I've worked on and the technologies I've used to build them. </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project,key) => (

            <div key={key} className="group bg-card rounded-lg overflow-hidden card-hover shadow-xs">
              <a href={project.demoUrl} target="_blank" className="block cursor-pointer">
                <div className="h-48 overflow-hidden">
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </a>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 border  py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span> 
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 p-1.5 cursor-pointer"> 
                      <ExternalLink size={20}/>
                    </a>
                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 p-1.5 cursor-pointer"> 
                      <Github size={20}/>
                    </a>
                  </div>  
                </div>
              </div>
            </div>


          ))}

        </div>

        <div className="text-center mt-12 ">
          <a href="https://github.com/sksohaib147" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2 cursor-pointer" >
            Check My GitHub <ArrowRight size={16}/> 
          </a>
        </div>

      </div>
        
    </section>
  );
}