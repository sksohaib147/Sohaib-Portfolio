import { Sun , Moon } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { cn } from "@/lib/utils"; 


export const ThemeToggle = () => {

    const [isdarkmode, setIsdarkmode] = useState(false);

    useEffect(() => {
        const storedTheme  = localStorage.getItem("theme"); 
        if(storedTheme === "dark"){
            setIsdarkmode(true);
            document.documentElement.classList.add("dark");

        }

        else{
            localStorage.setItem("theme", "light");
            setIsdarkmode(false);
            document.documentElement.classList.remove("dark"); 
        }

    }, []);

    const toggleTheme = () => {

        if (isdarkmode){

            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); 

            setIsdarkmode(false);
        }

            else{
 
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");

                setIsdarkmode(true);

            }
        }
    

    return(
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full trasition-colors duration-300, focus:outline-hidded")}>
            {isdarkmode ? (<Sun className="w-6 h-6 text-yellow-300 " /> 
            ): (
            <Moon className="w-6 h-6 text-blue-900 " />)}



        </button>
    )


    

}