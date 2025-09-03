import { Navbar, Footer } from "./components";

// Importar páginas
import inicio from "./pages/inicio.html?raw";
import nosotros from "./pages/nosotros.html?raw";
import metodologia from "./pages/metodologia.html?raw";
import especializaciones from "./pages/especializaciones.html?raw";
import contacto from "./pages/contacto.html?raw";

// Importar CSS
import globalCSS from "./css/global.css?inline";
import inicioCSS from "./css/inicio.css?inline";
import nosotrosCSS from "./css/nosotros.css?inline";
import metodologiaCSS from "./css/metodologia.css?inline";
import especializacionesCSS from "./css/especializaciones.css?inline";
import contactoCSS from "./css/contacto.css?inline";

const routes = {
  "/": { html: inicio, css: inicioCSS },
  "/nosotros": { html: nosotros, css: nosotrosCSS },
  "/metodologia": { html: metodologia, css: metodologiaCSS },
  "/especializaciones": { html: especializaciones, css: especializacionesCSS },
  "/contacto": { html: contacto, css: contactoCSS },
};

function injectCSS(css, path) {
  // eliminar estilos de páginas anteriores
  document.querySelectorAll("style[data-page]").forEach(s => s.remove());

  // inyectar global.css si no existe
  if (!document.querySelector("style[data-global]")) {
    const styleTag = document.createElement("style");
    styleTag.textContent = globalCSS;
    styleTag.setAttribute("data-global", "true");
    document.head.appendChild(styleTag);
  }

  // inyectar css de la página actual
  const styleTag = document.createElement("style");
  styleTag.textContent = css;
  styleTag.setAttribute("data-page", path);
  document.head.appendChild(styleTag);
}

function navigate(path) {
  const app = document.querySelector("#app");
  const route = routes[path];

  if (!route) {
    app.innerHTML = Navbar() + "<h2>Página no encontrada</h2>" + Footer();
    return;
  }

  injectCSS(route.css, path);
  app.innerHTML = Navbar() + route.html + Footer();
  history.pushState({}, "", path);
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});

navigate(window.location.pathname);
