
export interface ProjectItem {
  id: string;
  name: string;
  type: 'project' | 'task' | 'study';
  icon: string;
  status: 'completado' | 'en-progreso' | 'pendiente' | 'planeado';
  priority?: 'alta' | 'media' | 'baja';
  link?: string;
  target?: "_blank" | "_self";
  description?: string[];
  preview?: string;
  technologies?: string[];
  githubLink?: string;
}

export interface ProjectFolder {
  id: string;
  name: string;
  icon: string;
  expanded: boolean;
  items: ProjectItem[];
}

export interface ProjectsData {
  folders: ProjectFolder[];
}

export const projectsData: ProjectsData = {
  folders: [
    {
      id: 'proyectos-personales',
      name: 'Proyectos Personales',
      icon: '📁',
      expanded: false,
      items: [
        {
          id: 'formulario',
          name: 'Formulario acerca de gustos personales',
          type: 'project',
          icon: '📋',
          status: 'completado',
          description: ['Formulario web simple para recopilar gustos personales'],
          link: 'https://https-github-com-dpatzan2019173-cuestionario-ig4umgx4o.vercel.app/',
          target: '_blank',
          preview: '/assets/personales/form.png',
          technologies: ['ReactJS', 'JavaScript', 'CSS'],
          githubLink: 'https://github.com/dpatzan2/https-github.com-dpatzan2019173-cuestionario'
        },
        {
          id: 'calculadora',
          name: 'Calculadora web',
          type: 'project',
          icon: '🧮',
          status: 'completado',
          description: ['Calculadora usando unicamente html, css y javascript'],
          preview: '/assets/personales/calc.png',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/dpatzan2/IN5BM-Calculadora-DiegoPatzan'
        },
        {
          id: 'cifrador',
          name: 'Cifrador de texto',
          type: 'project',
          icon: '🔐',
          status: 'completado',
          description: ['Cifrador de texto simple utilizando HTML, CSS y JavaScript'],
          link: 'https://cifrador-neon.vercel.app/',
          preview: '/assets/personales/cifrador.png',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/dpatzan2/cifrador'
        },
        {
          id: 'gif-search',
          name: 'Gif Search',
          type: 'project',
          icon: '🎞️',
          status: 'completado',
          description: ['Búsqueda de GIFs utilizando la API de Giphy'],
          link: 'https://app-gifs-react.netlify.app/',
          preview: '/assets/personales/gifs.png',
          technologies: ['React', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/dpatzan2/react-gifexpertapp-course'
        },
        {
          id: 'Pokedex',
          name: 'Pokedex',
          type: 'project',
          icon: '⚡',
          status: 'completado',
          description: ['Aplicación web que muestra información de Pokémon utilizando la API de PokéAPI, como tambien poder buscar por nombre o número de Pokémon'],
          link: 'https://proyecto-libre-pokemon.netlify.app/inicio',
          preview: '/assets/personales/poke.png',
          technologies: ['React', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/dpatzan2/poke-api'
        },
        {
          id: 'todo-list',
          name: 'Todo List',
          type: 'project',
          icon: '✅',
          status: 'completado',
          description: ['Aplicación web de lista de tareas con funcionalidades de agregar, eliminar y marcar tareas como completadas, tambien cambiando la prioridad de las mismas'],
          link: 'https://genuine-kitsune-56ead6.netlify.app/',
          preview: '/assets/personales/todo.png',
          technologies: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          id: 'web-chat',
          name: 'Web Chat',
          type: 'project',
          icon: '💬',
          status: 'completado',
          description: ['Aplicacion web simple simulando un chat, donde se pueden enviar mensajes'],
          link: 'https://boisterous-kleicha-0f4c01.netlify.app/',
          preview: '/assets/personales/chat.png',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/dpatzan2/Web-chat'
        },
        {
          id: 'UX-case-study',
          name: 'Ux Case Study',
          type: 'project',
          icon: '🎨',
          status: 'completado',
          description: ['Aplicacion web simple para mostrar mis casos de estudio de UX actuales'],
          link: 'https://presentacion-five-alpha.vercel.app/',
          preview: '/assets/personales/ux.png',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/dpatzan2/presentacion'
        }
      ]
    },
    {
      id: 'tareas-clase',
      name: 'Tareas de Clase',
      icon: '📚',
      expanded: true,
      items: [
        {
          id: 'asistencia1',
          name: 'Asistencia 1',
          type: 'task',
          icon: '📄',
          status: 'completado',
          priority: 'baja',
          link: 'https://23525.dernait.my/20250128.txt',
          target: '_blank',
          description: ['Primer archivo subido al servidor como actividad de asistencia.'],
          technologies: ['TXT']
        },
        {
          id: 'asistencia2',
          name: 'Asistencia 2 - Top 10',
          type: 'task',
          icon: '🏆',
          status: 'completado',
          priority: 'baja',
          link: 'https://23525.dernait.my/top10/',
          target: '_blank',
          description: ['Primera interacción con html creando un top 10 a nuestra elección'],
          preview: '/assets/tareas/top10.png',
          technologies: ['HTML']
        },
        {
          id: 'lab1',
          name: 'Lab 1: Internet antes de la web',
          type: 'task',
          icon: '🌐',
          status: 'completado',
          priority: 'media',
          link: 'https://23525.dernait.my/lab1/',
          target: '_blank',
          description: ['Comprender cómo funcionaba el internet antes de la popularización de la web.'],
          preview: '/assets/tareas/.lab1png',
          technologies: ['HTML'],
          githubLink: 'https://github.com/dpatzan2/command-line-clues'
        },
        {
          id: 'lab2',
          name: 'Lab 2: Servidores remotos',
          type: 'task',
          icon: '🖥️',
          status: 'completado',
          priority: 'media',
          link: 'https://23525.dernait.my/lab2/Lab%202%20-%20Administracion%20de%20servidore%20-%2023525.txt',
          target: '_blank',
          description: ['Administración de servidores LINUX via SSH'],
          preview: '/assets/tareas/lab2.png',
          technologies: ['Linux', 'SSH']
        },
        {
          id: 'lab3',
          name: 'Lab 3: HTML only',
          type: 'task',
          icon: '📄',
          status: 'completado',
          priority: 'media',
          link: 'https://23525.dernait.my/lab3/',
          target: '_blank',
          description: ['Práctica de páginas web simples con HTML puro'],
          preview: '/assets/tareas/lab3.png',
          technologies: ['HTML'],
          githubLink: 'https://github.com/dpatzan2/Lab3-web'
        },
        {
          id: 'lab4',
          name: 'Lab 4: CSS only',
          type: 'task',
          icon: '🎨',
          status: 'completado',
          priority: 'media',
          link: 'https://23525.dernait.my/lab4/',
          target: '_blank',
          description: ['Conceptos básicos de CSS, posicionamiento y layout'],
          preview: '/assets/tareas/lab4.png',
          technologies: ['CSS', 'HTML'],
          githubLink: 'https://github.com/dpatzan2/Lab4-web'
        },
        {
          id: 'lab5',
          name: 'Lab 5: JS only',
          type: 'task',
          icon: '⚡',
          status: 'completado',
          priority: 'media',
          link: 'https://23525.dernait.my/lab5/',
          target: '_blank',
          description: ['Conceptos básicos de JavaScript y manipulación del DOM'],
          preview: '/assets/tareas/lab5.png',
          technologies: ['JavaScript', 'HTML', 'CSS'],
          githubLink: 'https://github.com/dpatzan2/lab5-web'
        },
        {
          id: 'lab6',
          name: 'Lab 6: Backend only',
          type: 'task',
          icon: '🔧',
          status: 'completado',
          priority: 'alta',
          link: 'https://github.com/dpatzan2/lab6-web',
          target: '_blank',
          description: ['Desarrollo backend, API REST y Docker'],
          technologies: ['Rust', 'Actix-web', 'MongoDB', 'Rest API'],
          githubLink: 'https://github.com/dpatzan2/lab6-web',
        },
        {
          id: 'lab7',
          name: 'Lab 7: React',
          type: 'task',
          icon: '⚛️',
          status: 'completado',
          priority: 'alta',
          link: 'https://23525.dernait.my/lab7/',
          target: '_blank',
          description: ['Configuración de ambiente React y conceptos básicos'],
          preview: '/assets/tareas/lab7.png',
          technologies: ['React', 'JavaScript', 'JSX', 'CSS'],
          githubLink: 'https://github.com/dpatzan2/lab7-web'
        },
        {
          id: 'proyecto1',
          name: 'Proyecto 1: Calculadora',
          type: 'task',
          icon: '🧮',
          status: 'completado',
          priority: 'alta',
          link: 'https://23525.dernait.my/proyecto1/',
          target: '_blank',
          description: ['Desarrollo de calculadora web'],
          preview: '/assets/tareas/proyecto1.png',
          technologies: ['React', 'TailwindCSS', 'JavaScript', 'JSX', 'HTML'],
          githubLink: 'https://github.com/dpatzan2/Proyecto-1-web'
        }
      ]
    },
    {
      id: 'casos-estudio',
      name: 'Casos de Estudio',
      icon: '🔍',
      expanded: false,
      items: [
        {
          id: 'click-clock',
          name: 'Rediseño de la interfaz de TikTok',
          type: 'study',
          icon: '📱',
          status: 'completado',
          description: ['Rediseño completo de la interfaz de TikTok con enfoque en UX/UI moderno. Se cambió el nombre a "Click Clock" y se mejoró la navegación, accesibilidad y experiencia visual para crear una plataforma más intuitiva y atractiva.'],
          link: 'https://presentacion-five-alpha.vercel.app/clickclok-case-study', 
          preview: '/assets/casos/ClickClock.png',
          technologies: ['UX Design', 'Figma', 'NextJS']
        },
        {
          id: 'WhatsApp-Payment-Reminders',
          name: 'Recordatorios de Pago en WhatsApp',
          type: 'study',
          icon: '💰',
          status: 'completado',
          description: ['Diseño e implementación de un sistema de recordatorios de pago automatizados integrado en WhatsApp. Solución completa que mejora la gestión de cobros mediante notificaciones y seguimiento de pagos pendientes en chats.'],
          link: 'https://presentacion-five-alpha.vercel.app/whatsapp-case',
          preview: '/assets/casos/wassa.png',
          technologies: ['UX Design', 'Figma', 'NextJS']
        },
        {
          id: 'MomPlayOasis',
          name: 'Mom Play Oasis - Estudio de caso',
          type: 'study',
          icon: '👩‍👧‍👦',
          status: 'completado',
          description: ['Investigación profunda sobre las madres gamers y desarrollo de una plataforma especializada. Incluye análisis de necesidades, diseño de experiencia adaptada a horarios limitados y creación de una comunidad gaming inclusiva para madres.'],
          link: 'https://presentacion-five-alpha.vercel.app/momplayoasis-case-study',
          preview: '/assets/casos/MomPlayOasis.png',
          technologies: ['UX Design', 'Figma', 'NextJS']
        },
        {
          id: 'GameSlot',
          name: 'Game Slot - Estudio de caso',
          type: 'study',
          icon: '🎮',
          status: 'completado',
          description: ['Plataforma innovadora de gestión de tiempo de juego diseñada para gamers ocupados. Incluye estimaciones de tiempo de completado, recomendaciones personalizadas y sistema de slots de tiempo para optimizar las sesiones de gaming según disponibilidad.'],
          link: 'https://presentacion-five-alpha.vercel.app/gameslot-case-study',
          preview: '/assets/casos/GameSlot.png',
          technologies: ['UX Design', 'Figma', 'NextJS']
        }
      ]
    },
  ]
};


export interface Project {
  id: string;
  title: string;
  description: string[];
  link: string;
  target?: "_blank" | "_self";
  progress?: number;
  tags?: string[];
}

export const projects: Project[] = projectsData.folders
  .find(folder => folder.id === 'tareas-clase')?.items
  .filter(item => item.link)
  .map(item => ({
    id: item.id,
    title: item.name,
    description: item.description || [],
    link: item.link!,
    target: item.target,
    progress: item.status === 'completado' ? 100 : item.status === 'en-progreso' ? 50 : 0,
    tags: item.technologies
  })) || [];