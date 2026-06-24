# Mi tarjeta de presentación en React

Proyecto de la materia **React Inicial — Módulo 1, Unidad 4** (UTN BA · Centro de e-Learning).

Aplicación hecha con **Vite + React** que practica la creación de **componentes funcionales**, el uso de **JSX** y el paso de **props** para personalizar contenido. Se construye un único componente reutilizable `Tarjeta` que se renderiza tres veces con datos distintos, mostrando tarjetas de presentación de personas con su foto, nombre, profesión y una breve descripción.

---

## 🛠️ Tecnologías

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- CSS (estilos por componente)

---

## 🚀 Cómo clonar, instalar y ejecutar

```bash
# 1. Clonar el repositorio
git clone https://github.com/GinoSarubbi/Modulo1-Unidad4.git  

# 2. Entrar a la carpeta del proyecto
cd mi-app-react

# 3. Instalar las dependencias
npm install

# 4. Levantar el servidor de desarrollo
npm run dev
```

Después de `npm run dev`, abrí en el navegador la URL que muestra la consola (por defecto `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
```

---

## 📁 Estructura del proyecto

```
mi-app-react/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── src/
    ├── main.jsx
    ├── App.jsx              # Renderiza las 3 tarjetas
    ├── App.css
    ├── index.css
    ├── assets/              # Imágenes locales de las tarjetas
    │   ├── ginoSarubbi.webp
    │   ├── lauraDiseñadora.jpg
    │   └── martinAnalista.jpg
    └── components/
        └── Tarjeta/
            ├── Tarjeta.jsx  # Componente reutilizable (recibe props)
            └── Tarjeta.css  # Estilos de la tarjeta
```

El componente `Tarjeta` recibe por props: `nombre`, `profesion`, `imagen` y `descripcion`, y arma el JSX con una `<img>` (con `alt` descriptivo), un `<h2>` con el nombre, un `<h3>` con la profesión y un `<p>` con la descripción.

---

## 👤 Créditos del autor

- **Estudiante:** Gino Sarubbi 🔧
- **Curso:** React Inicial
- **Módulo / Unidad:** Módulo 1 — Unidad 4
- **Institución:** UTN BA · Centro de e-Learning

---

## 📚 Citación de fuentes

### Documentación y bibliografía

- Banks, A. y Porcello, E. *Learning React: Modern Patterns for Developing React Apps*. 2ª Ed. O'Reilly Media; 2020.
- Freeman, E. y Robson, E. *Head First. JavaScript Programming*. 1ª Ed. O'Reilly Media; 2014.
- MDN Web Docs. *`<img>`: The Image Embed element*. Mozilla Corporation. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
- React. *Writing Markup with JSX*. https://react.dev/learn/writing-markup-with-jsx
- React. *Passing Props to a Component*. https://react.dev/learn/passing-props-to-a-component

---

