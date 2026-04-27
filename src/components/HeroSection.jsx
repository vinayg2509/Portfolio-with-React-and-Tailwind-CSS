import React from "react";
import { ArrowDown } from "lucide-react";
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col px-4 justify-center items-center"
    >
      <div className="container z-10 mx-auto text-center max-w-4xl ">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi i'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Vinay
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              G
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3 text-muted-foreground mx-auto">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="animate-fade-in-delay-4 pt-4">
            <a href="#project" className="cosmic-button " >
                View My Work
            </a>
          </div>

        </div>
      </div>
      <div className="flex flex-col absolute bottom-8 left-1/2 animate-bounce items-center transform -translate-x-1/2">
        <span className="text-muted-foreground mb-2 text-sm">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary"/>
      </div>
    </section>
  );
}
