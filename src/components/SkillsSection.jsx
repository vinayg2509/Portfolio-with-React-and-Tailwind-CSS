import React, { useState } from "react";

import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    level: 50,
    category: "frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    level: 50,
    category: "frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },

  // Backend
  {
    name: "Express",
    level: 50,
    category: "backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    level: 70,
    category: "backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    level: 65,
    category: "backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    level: 60,
    category: "backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "SpringBoot",
    level: 60,
    category: "backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },

  // Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Intellij",
    level: 95,
    category: "tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  },
];
const categories = ["all", "frontend", "backend", "tools"];
export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills=skills.filter((skill)=>
    activeCategory==="all"||skill.category===activeCategory
  )

  return (
    <section id="skills" className="py-24 px-4 bg-background-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mb-12 gap-6">
        {categories.map((category, key) => (
          <button
            onClick={() => setActiveCategory(category)}
            key={key}
            className={cn(
              "px-5 py-2 rounded-full capitalize transition-colors card-hover duration-300",
              activeCategory===category?"bg-primary text-primary-foreground":
              "bg-secondary/70 text-forefround hover:bg-secondary"
              
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterSkills.map((skill, key) => (
          <div
            key={key}
            className="card-hover bg-card rounded-lg p-6 shadow-xs"
          >
            <div className="text-left mb-6">
              <h3 className="font-semibold text-lg">
                <img src={skill.image} alt={skill.name} className="w-8 h-8" />
                {skill.name}
              </h3>
            </div>
            <div className="w-full bg-background/50 h-2 rounded-full overflow-hidden">
              <div
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                style={{ width: skill.level + "%" }}
              />
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                {" "}
                {skill.level + " %"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
