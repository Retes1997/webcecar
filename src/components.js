// ---------------------------------------------------------------------------------

export function Navbar() {
  return `
    <nav class="navbar">
      <!-- Logo -->
      <a href="/" class="navbar__logo" data-link>
        <img src="/logo.png" alt="Logo WEBCECAR" class="navbar__logo-img" />
      </a>

      <!-- Derecha -->
      <div class="navbar__right">
        <!-- Redes sociales -->
        <div class="navbar__social">
          <a
            href="https://www.facebook.com/profile.php?id=61561921585595"
            aria-label="Facebook"
            target="_blank"
            class="navbar__social-link"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.tiktok.com/@consorcio.cecarpe"
            aria-label="TikTok"
            target="_blank"
            class="navbar__social-link"
          >
            <i class="fab fa-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com/consorcioeducativocecar/"
            aria-label="Instagram"
            target="_blank"
            class="navbar__social-link"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>

        <!-- Botón hamburguesa -->
        <button class="navbar__hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Menú -->
        <ul class="navbar__menu" id="menu">
          <li><a href="/" class="navbar__menu-link" data-link>Inicio</a></li>
          <li>
            <a href="/nosotros" class="navbar__menu-link" data-link>Nosotros</a>
          </li>
          <li>
            <a href="/metodologia" class="navbar__menu-link" data-link
              >Metodología</a
            >
          </li>
          <li>
            <a href="/especializaciones" class="navbar__menu-link" data-link
              >Especializaciones</a
            >
          </li>
          <li>
            <a href="/contacto" class="navbar__menu-link" data-link>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>

    <script>
      const hamburger = document.getElementById("hamburger");
      const menu = document.getElementById("menu");

      hamburger.addEventListener("click", () => {
        menu.classList.toggle("navbar__menu--active");
        hamburger.classList.toggle("navbar__hamburger--active");
      });
    </script>
  `;
}

// ---------------------------------------------------------------------------------

export function Footer() {
  return `
    <footer class="footer">
      <p>© ${new Date().getFullYear()} WEBCECAR. Todos los derechos reservados.</p>
    </footer>
  `;
}

// ---------------------------------------------------------------------------------
