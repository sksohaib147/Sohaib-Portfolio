import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className=" py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center ">
            {" "}
            <p className="text-sm text-muted-foreground "> {" "} &copy; {new Date().getFullYear()} Sohaib Sikandar. All rights reserved.</p>

            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
            
        </footer>
    )
}