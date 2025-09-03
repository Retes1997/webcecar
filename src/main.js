import { Navbar, Footer } from "./components";

// ---------------------------------------------------------------------------------

import inicio from "./pages/inicio.html?raw";
import nosotros from "./pages/nosotros.html?raw";
import metodologia from "./pages/metodologia.html?raw";
import especializaciones from "./pages/especializaciones.html?raw";
import contacto from "./pages/contacto.html?raw";
import notFound from "./pages/404.html?raw";

// ---------------------------------------------------------------------------------

import globalCSS from "./css/global.css?inline";
import inicioCSS from "./css/inicio.css?inline";
import nosotrosCSS from "./css/nosotros.css?inline";
import metodologiaCSS from "./css/metodologia.css?inline";
import especializacionesCSS from "./css/especializaciones.css?inline";
import contactoCSS from "./css/contacto.css?inline";
import notFoundCSS from "./css/404.css?inline";
import navbarCSS from "./css/navbar.css?inline";
import footerCSS from "./css/footer.css?inline"; // 👈 cuidado: asegúrate que sea en minúscula

// ---------------------------------------------------------------------------------

const routes = {
  "/": { html: inicio, css: inicioCSS },
  "/nosotros": { html: nosotros, css: nosotrosCSS },
  "/metodologia": { html: metodologia, css: metodologiaCSS },
  "/especializaciones": { html: especializaciones, css: especializacionesCSS },
  "/contacto": { html: contacto, css: contactoCSS },
  "404": { html: notFound, css: notFoundCSS },
};

// ---------------------------------------------------------------------------------

function injectCSS(css, path) {
  // eliminar estilos de páginas anteriores
  document.querySelectorAll("style[data-page]").forEach((s) => s.remove());

  // inyectar global.css si no existe
  if (!document.querySelector("style[data-global]")) {
    const styleTag = document.createElement("style");
    styleTag.textContent = globalCSS;
    styleTag.setAttribute("data-global", "true");
    document.head.appendChild(styleTag);
  }

  // inyectar navbar.css si no existe
  if (!document.querySelector("style[data-navbar]")) {
    const styleTag = document.createElement("style");
    styleTag.textContent = navbarCSS;
    styleTag.setAttribute("data-navbar", "true");
    document.head.appendChild(styleTag);
  }

  // inyectar footer.css si no existe
  if (!document.querySelector("style[data-footer]")) {
    const styleTag = document.createElement("style");
    styleTag.textContent = footerCSS;
    styleTag.setAttribute("data-footer", "true");
    document.head.appendChild(styleTag);
  }

  // inyectar css de la página actual
  const styleTag = document.createElement("style");
  styleTag.textContent = css;
  styleTag.setAttribute("data-page", path);
  document.head.appendChild(styleTag);
}

// ---------------------------------------------------------------------------------

function initNavbarEvents() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("navbar__menu--active");
      hamburger.classList.toggle("navbar__hamburger--active");
    });
  }
}

// ---------------------------------------------------------------------------------

let firstLoad = true;

function render(path) {
  const app = document.querySelector("#app");

  const isValid = Boolean(routes[path]);
  const route = isValid ? routes[path] : routes["404"];

  injectCSS(route.css, isValid ? path : "404");

  // renderizar HTML
  app.innerHTML = Navbar() + route.html + Footer();

  // inicializar eventos después de renderizar
  initNavbarEvents();

  return isValid ? path : "/404";
}

// ---------------------------------------------------------------------------------
// Navegación
function navigate(path) {
  const finalPath = render(path);

  if (firstLoad) {
    history.replaceState({}, "", finalPath); // primera vez → no duplicar
    firstLoad = false;
  } else {
    history.pushState({}, "", finalPath); // siguientes navegaciones → historial normal
  }
}

// ---------------------------------------------------------------------------------
// Delegación de eventos en enlaces
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    navigate(link.getAttribute("href"));
  }
});

// Manejar navegación con botones de atrás/adelante del navegador
window.addEventListener("popstate", () => {
  render(window.location.pathname);
});

// ---------------------------------------------------------------------------------
// Primer render
navigate(window.location.pathname);
