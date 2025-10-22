import { cn } from "@/lib/utils";
import { useState } from "react";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";


const navItems = [
    {name:"Home", href:"#hero"},
    {name:"About", href:"#about"},
    {name:"Skills", href:"#skills"},
    {name:"Projects", href:"#projects"},
    {name:"Contact", href:"#contact"},
]

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    
    }, []);

    return (
        <nav
        
        className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")} 
        
        >
            <div className="container flex items-center justify-between">
                <button 
                    onClick={() => {
                        const element = document.querySelector('#hero');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="text-xl font-bold text-primary flex items-center cursor-pointer"
                > 

                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            Sohaib Sikandar {" "}
                        </span>
                         Portfolio
                    </span>
                </button> 



                {/* desktop version nav */}

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item,key) => (

                         <button 
                            key={key} 
                            onClick={() => {
                                const element = document.querySelector(item.href);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                        >
                            {item.name}
                         </button>


                    ))}
                </div>



                {/* mobile version nav*/}

                <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50 cursor-pointer" aria-label={isMenuOpen ? "close menu" : "open menu"}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center" , "transition-all duration-300 md:hidden " , isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>


                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item,key) => (

                         <button 
                            key={key} 
                            onClick={() => {
                                const element = document.querySelector(item.href);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                                setIsMenuOpen(false);
                            }}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                        >
                            {item.name}
                         </button>


                    ))}
                </div>
                </div>

            </div>
        </nav>
    )
}