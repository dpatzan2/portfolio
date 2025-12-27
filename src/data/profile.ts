import { getSkillIcon } from './skillIcons';

export interface SkillWithIcon {
  name: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  email: string;
  description: string[];
  skills: SkillWithIcon[];
  softSkills: string[];
}

// Función helper para crear habilidades con iconos automáticamente
function createSkill(name: string): SkillWithIcon {
  return { name, icon: getSkillIcon(name) };
}

export const profileData: ProfileData = {
  name: "Diego Fernando Patzán Marroquín",
  email: "df.patzan@gmail.com",
  description: [
    "Estudiante de Ingeniería en Ciencias de la Computación en la universidad del valle de Guatemala, en la busca aprender sobre nuevas tecnologías y mejorar mis habilidades.",
    "Siempre en busca de nuevos desafíos que me permitan crecer profesionalmente."
  ],
  // Para agregar una nueva habilidad, solo agrega el nombre aquí
  // El icono se obtiene automáticamente de skillIcons.ts
  skills: [
    createSkill("JavaScript/TypeScript"),
    createSkill("React"),
    createSkill("Node.js"),
    createSkill("Python"),
    createSkill("Java"),
    createSkill("HTML/CSS"),
    createSkill("Astro"),
    createSkill("TailwindCSS"),
    createSkill("Git"),
    createSkill("Docker"),
    createSkill("SQL"),
    createSkill("MongoDB"),
    createSkill("Flutter"),
    createSkill("Dart"),
    createSkill("React native"),
    createSkill(".NET Core")
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
