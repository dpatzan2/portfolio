# Spec: Experiencia Ubuntu completa para el portfolio

**Fecha:** 2026-07-11 · **Estado:** Aprobado

## Objetivo

Que el portfolio deje de "parecer" Ubuntu y se sienta como un Ubuntu real: ciclo de sesión completo, escritorio interactivo, ventanas con comportamiento GNOME y apps de sistema. Todo en español, sin dependencias nuevas, siguiendo el patrón existente (componentes Astro + `<script>` vanilla + global `window.windowManager`).

## Alcance (7 bloques)

### 1. Ciclo de sesión
- `LockScreen.astro`: tras el boot, pantalla GDM con hora grande, avatar (`/assets/profile.jpg`), nombre y "Presiona Enter o haz clic para entrar". Fade-out al escritorio.
- Apagado real: secuencia inversa — fade a pantalla con logo Ubuntu → pantalla negra con "clic para encender" → boot → lock screen.
- Suspender: pantalla negra que se descarta con clic/tecla.

### 2. Menú de sistema (quick settings)
- Reemplaza los botones sueltos volumen/batería/power del `TopPanel` por un grupo unificado que abre un dropdown GNOME:
  - Slider de volumen (visual).
  - Toggle tema claro/oscuro.
  - Selector rápido de wallpaper.
  - Botones: Suspender / Reiniciar / Apagar.

### 3. Escritorio interactivo
- `DesktopIcons.astro`: iconos con doble clic — `CV.pdf` (abre pdfviewer), `Proyectos` (abre projects), `léeme.txt` (abre gedit).
- `ContextMenu.astro`: click derecho en escritorio — Cambiar fondo de pantalla, Abrir terminal, Configuración, Acerca de.

### 4. Window manager mejorado
- Snapping en `WindowsContainer.astro`: arrastrar a borde izq/der = media pantalla, borde superior = maximizar; overlay naranja de preview durante el arrastre.
- Atajos: `Alt+Tab` cicla ventanas abiertas, `Super` abre Activities, `Ctrl+Alt+T` abre terminal, `Esc` cierra overlays.
- Activities overview: miniaturas reales de ventanas via clon escalado (`transform: scale()`), no placeholders.

### 5. Apps nuevas
- `SettingsContent.astro` (Configuración): sección Apariencia (tema + wallpapers Yaru como CSS gradients + el jpg actual) y sección "Acerca de" estilo Ubuntu (nombre del equipo, "OS: Portfolio OS 24.04 LTS", memoria/procesador de broma, versión).
- `GeditContent.astro` (Editor de texto): abre `léeme.txt` con presentación personal, editable en el cliente.
- Ambas se registran en dock (desktop y móvil) y window manager como las apps existentes.

### 6. Notificaciones
- `Notifications.astro`: toasts estilo GNOME arriba-centro, auto-cierre a los ~4s.
- API global `window.notify(titulo, mensaje, icono?)`.
- Uso: bienvenida tras login, confirmaciones (cambio de fondo, tema, suspensión).

### 7. Español consistente
- Menús del panel: `Files/View/Help` → `Archivos/Vista/Ayuda`; `Activities` → `Actividades`.
- Todos los textos nuevos en español.

## Estado y persistencia

- Tema y wallpaper en `localStorage` (`portfolio-theme`, `portfolio-wallpaper`), aplicados al cargar.
- Tema: colores `ubuntu-panel/window/header` migran a variables CSS en `:root`; clase `light` en `<html>` las cambia.
- Wallpaper: variable CSS/inline-style en el div del escritorio.

## Fuera de alcance
- Sonidos, workspaces múltiples, trash funcional, navegador embebido, drag de iconos del escritorio.

## Criterio de éxito
`npm run build` pasa; el flujo boot → login → escritorio → apagar → encender funciona; snapping, Alt+Tab y Activities operan con las 7 apps; tema y wallpaper persisten al recargar.
