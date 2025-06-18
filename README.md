# Omorin CLI

![omorin-banner](https://fakeimg.pl/600x120/?text=Omorin%20CLI&font=lobster)

Omorin es una herramienta de línea de comandos creada para facilitar el desarrollo frontend, especialmente en proyectos basados en React. Ofrece comandos personalizados para generar estructuras de componentes, organizar tu código y acelerar tu flujo de trabajo.

## 🚀 Características

- 🔧 Generación de componentes React con soporte para `.jsx` y `.tsx`
- 🎨 Creación automática de archivos de estilos (`.css` o `.module.css`)
- 📁 Organización estructurada en carpetas dentro de `src/components`
- ✅ Comandos agrupados y bien documentados con `--help`
- 📦 Fácil de instalar globalmente como CLI

## 📦 Instalación

```bash
npm install -g omorin-cli
```

> Asegúrate de haber ejecutado previamente `npm run build` si estás trabajando desde el repositorio local.

## 🧪 Uso básico

```bash
omorin --help
```

Ejemplo para crear un componente:

```bash
omorin comp MyComponent --tsx
```

Esto genera:

```
src/components/MyComponent/
├── MyComponent.tsx
└── MyComponent.module.css
```

## 📜 Comandos disponibles

| Comando | Descripción                                        |
| ------- | -------------------------------------------------- |
| `comp`  | Genera un nuevo componente React (`.jsx` o `.tsx`) |
| `--tsx` | Indica que el componente debe ser TypeScript       |
| `--jsx` | Indica que el componente debe ser JavaScript       |

Ejemplo:

```bash
omorin comp Button --tsx
```

## 💡 Tecnologías utilizadas

- Node.js
- TypeScript
- [Commander.js](https://github.com/tj/commander.js) – manejo de CLI
- [Chalk](https://github.com/chalk/chalk) – salida de colores en consola
- [fs-extra](https://github.com/jprichardson/node-fs-extra) – utilidades de archivos

## 👤 Autor

Nahuel Arévalo
