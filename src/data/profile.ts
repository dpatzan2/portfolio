export interface SkillWithIcon {
  name: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  carne: string;
  email: string;
  course: string;
  description: string[];
  skills: SkillWithIcon[];
  softSkills: string[];
}

export const profileData: ProfileData = {
  name: "Diego Fernando Patzán Marroquín",
  carne: "23525",
  email: "pat23525@uvg.edu.gt",
  course: "Sistemas y tecnologías web",
  description: [
    "Estudiante de Ingeniería en Ciencias de la Computación en la universidad del valle de Guatemala, con pasión por el desarrollo web y las tecnologías emergentes.",
    "Siempre en busca de nuevos desafíos que me permitan crecer profesionalmente."
  ],
  skills: [
    { name: "JavaScript/TypeScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "Astro", icon: "🚀" },
    { name: "TailwindCSS", icon: "💨" },
    { name: "Git", icon: "📝" },
    { name: "Docker", icon: "🐳" },
    { name: "SQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" }
  ],
  softSkills: [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Comunicación efectiva",
    "Adaptabilidad",
    "Pensamiento crítico",
    "Liderazgo",
    "Gestión del tiempo",
    "Creatividad"
  ]
};
