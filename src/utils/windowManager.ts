// Window Manager - Sistema de gestión de ventanas estilo Ubuntu/GNOME

export interface WindowState {
    id: string;
    title: string;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    isFocused: boolean;
    position: { x: number; y: number };
    size: { width: number; height: number };
    prevPosition?: { x: number; y: number };
    prevSize?: { width: number; height: number };
    zIndex: number;
}

export interface WindowManagerState {
    windows: Map<string, WindowState>;
    activeWindowId: string | null;
    highestZIndex: number;
}

// Estado global del window manager
const state: WindowManagerState = {
    windows: new Map(),
    activeWindowId: null,
    highestZIndex: 100
};

// Event listeners para notificar cambios
type WindowEventCallback = (windowId: string, windowState: WindowState | null) => void;
const listeners: Set<WindowEventCallback> = new Set();

export function subscribe(callback: WindowEventCallback): () => void {
    listeners.add(callback);
    return () => listeners.delete(callback);
}

function notifyListeners(windowId: string, windowState: WindowState | null) {
    listeners.forEach(callback => callback(windowId, windowState));
}

// Registrar una ventana
export function registerWindow(id: string, title: string, initialPosition: { x: number; y: number }, initialSize: { width: number; height: number }): WindowState {
    const windowState: WindowState = {
        id,
        title,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        isFocused: false,
        position: { ...initialPosition },
        size: { ...initialSize },
        zIndex: ++state.highestZIndex
    };

    state.windows.set(id, windowState);
    focusWindow(id);
    return windowState;
}

// Obtener estado de una ventana
export function getWindow(id: string): WindowState | undefined {
    return state.windows.get(id);
}

// Obtener todas las ventanas
export function getAllWindows(): WindowState[] {
    return Array.from(state.windows.values());
}

// Enfocar una ventana (traer al frente)
export function focusWindow(id: string): void {
    const window = state.windows.get(id);
    if (!window || window.isMinimized) return;

    // Desenfocar la ventana anterior
    if (state.activeWindowId && state.activeWindowId !== id) {
        const prevWindow = state.windows.get(state.activeWindowId);
        if (prevWindow) {
            prevWindow.isFocused = false;
            notifyListeners(state.activeWindowId, prevWindow);
        }
    }

    // Enfocar la nueva ventana
    window.isFocused = true;
    window.zIndex = ++state.highestZIndex;
    state.activeWindowId = id;
    notifyListeners(id, window);
}

// Minimizar una ventana
export function minimizeWindow(id: string): void {
    const window = state.windows.get(id);
    if (!window) return;

    window.isMinimized = true;
    window.isFocused = false;

    // Enfocar otra ventana si hay alguna disponible
    if (state.activeWindowId === id) {
        state.activeWindowId = null;
        const otherWindow = getAllWindows().find(w => w.id !== id && w.isOpen && !w.isMinimized);
        if (otherWindow) {
            focusWindow(otherWindow.id);
        }
    }

    notifyListeners(id, window);
}

// Restaurar una ventana minimizada
export function restoreWindow(id: string): void {
    const window = state.windows.get(id);
    if (!window) return;

    window.isMinimized = false;
    focusWindow(id);
    notifyListeners(id, window);
}

// Maximizar/restaurar una ventana
export function toggleMaximizeWindow(id: string): void {
    const window = state.windows.get(id);
    if (!window) return;

    if (window.isMaximized) {
        // Restaurar a tamaño anterior
        if (window.prevPosition && window.prevSize) {
            window.position = { ...window.prevPosition };
            window.size = { ...window.prevSize };
        }
        window.isMaximized = false;
    } else {
        // Guardar posición y tamaño actual
        window.prevPosition = { ...window.position };
        window.prevSize = { ...window.size };
        window.isMaximized = true;
    }

    focusWindow(id);
    notifyListeners(id, window);
}

// Cerrar una ventana
export function closeWindow(id: string): void {
    const window = state.windows.get(id);
    if (!window) return;

    window.isOpen = false;
    window.isFocused = false;

    if (state.activeWindowId === id) {
        state.activeWindowId = null;
        const otherWindow = getAllWindows().find(w => w.id !== id && w.isOpen && !w.isMinimized);
        if (otherWindow) {
            focusWindow(otherWindow.id);
        }
    }

    notifyListeners(id, window);
}

// Abrir una ventana cerrada
export function openWindow(id: string): void {
    const window = state.windows.get(id);
    if (!window) return;

    window.isOpen = true;
    window.isMinimized = false;
    focusWindow(id);
    notifyListeners(id, window);
}

// Mover una ventana
export function moveWindow(id: string, x: number, y: number): void {
    const window = state.windows.get(id);
    if (!window || window.isMaximized) return;

    window.position = { x, y };
    notifyListeners(id, window);
}

// Redimensionar una ventana
export function resizeWindow(id: string, width: number, height: number): void {
    const window = state.windows.get(id);
    if (!window || window.isMaximized) return;

    // Tamaño mínimo
    window.size = {
        width: Math.max(300, width),
        height: Math.max(200, height)
    };
    notifyListeners(id, window);
}

// Toggle para click en dock
export function toggleWindow(id: string): void {
    const window = state.windows.get(id);
    if (!window) return;

    if (!window.isOpen) {
        openWindow(id);
    } else if (window.isMinimized) {
        restoreWindow(id);
    } else if (window.isFocused) {
        minimizeWindow(id);
    } else {
        focusWindow(id);
    }
}
