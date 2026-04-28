import { Briefcase, Code ,Book} from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mmb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-col-1 py-8 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              I am Java Spring Boot ,Web Developer and Tech Trainer
            </h2>

            <p className="text-muted-foreground">
              With over 1.9 years of experience in Spring boot and web
              development, I specialize in creating responsive, accessible, and
              performant web applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4  justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch{" "}
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-col-1 gap-6 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className=" h-6 w-6 flex text-primary">
                  <Code />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className=" h-6 w-6 flex text-primary">
                  <Code />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">Spring Boot </h4>
                  <p className="text-muted-foreground">
                    Passionate Java developer skilled in building scalable REST
                    APIs and microservices using Spring Boot, Spring Security,
                    and PostgresSQL,MySQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className=" h-6 w-6 flex text-primary">
                  <Book />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">Tech Trainer</h4>
                  <p className="text-muted-foreground">
                   Java Technical Trainer dedicated to building strong programming foundations through practical, project-based learning 
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
