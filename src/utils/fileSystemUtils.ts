import type { ProjectItem } from '../data/projects';

export function getFileIcon(item: ProjectItem): string {
  const icons: Record<string, string> = {
    'project': '🚀',
    'task': '📋',
    'study': '📚'
  };
  return item.icon || icons[item.type] || '📄';
}

export function getStatusIcon(status: string): string {
  const icons: Record<string, string> = {
    'completado': '✓',
    'en-progreso': '⟳',
    'pendiente': '!',
    'planeado': '◷'
  };
  return icons[status] || '';
}

export function getStatusClass(status: string): string {
  const classes: Record<string, string> = {
    'completado': 'bg-green-500 text-white',
    'en-progreso': 'bg-yellow-500 text-white',
    'pendiente': 'bg-red-500 text-white',
    'planeado': 'bg-blue-500 text-white'
  };
  return classes[status] || 'bg-gray-500 text-white';
}

export function renderGridView(items: ProjectItem[]): string {
  return `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      ${items.map(item => `
        <div class="group flex flex-col items-center p-4 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200 relative hover:scale-105 file-enter" 
             data-file-id="${item.id}" 
             data-link="${item.link || ''}" 
             data-target="${item.target || '_blank'}"
             data-preview='${JSON.stringify(item)}'
             data-file-cursor>
          <div class="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/10 rounded-lg relative transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 shine-effect">
            <span class="text-3xl">${getFileIcon(item)}</span>
            <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${getStatusClass(item.status)}">
              ${getStatusIcon(item.status)}
            </span>
            <div class="absolute top-0 right-0 w-4 h-4 bg-white/20" style="clip-path: polygon(0 0, 100% 100%, 100% 0);"></div>
          </div>
          <div class="text-sm text-center text-gray-100 font-medium">${item.name}</div>
          <div class="text-xs text-gray-400 mt-1">${item.type}</div>
          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-ubuntu-header text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            ${item.description ? item.description[0] : 'Click para vista previa'}
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-ubuntu-header"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderListView(items: ProjectItem[]): string {
  return `
    <div class="space-y-1">
      ${items.map(item => `
        <div class="flex items-center gap-3 p-2 hover:bg-white/10 rounded cursor-pointer transition-colors" 
             data-file-id="${item.id}" 
             data-link="${item.link || ''}" 
             data-target="${item.target || '_blank'}"
             data-preview='${JSON.stringify(item)}'
             data-file-cursor>
          <span class="text-2xl">${getFileIcon(item)}</span>
          <div class="flex-1 flex items-center justify-between">
            <span class="text-sm text-gray-100">${item.name}</span>
            <div class="flex items-center gap-3">
              <span class="text-xs text-gray-400">${item.type}</span>
              <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${getStatusClass(item.status)}">
                ${getStatusIcon(item.status)}
              </span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
