import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import {cn} from '@/lib/utils'

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    const storedTheme=localStorage.getItem("theme")

    if(storedTheme==="dark")
    {
        document.documentElement.classList.add("dark")
        setIsDarkMode(true)

    }
    else
    {
        setIsDarkMode(false)
        localStorage.setItem("theme","light")

    }
  },[])

  const toggleMode=()=>{

    if(isDarkMode)
    {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light")
        setIsDarkMode(false)
    }
    else
    {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme","dark")
        setIsDarkMode(true)
    }

  }
  return (
    <div>
      <button onClick={toggleMode} className={cn("fixed max-sm:hidden bottom-10 right-5 z-5 p-2 rounded-full transition-color duration-300",
      "focus:outline"
      )}>
       
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </div>
  );
}
