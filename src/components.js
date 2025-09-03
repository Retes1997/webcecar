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
  `;
}

// ---------------------------------------------------------------------------------

export function Footer() {
  return `
    <footer class="footer">
      <div class="footer__container">
        <!-- Contactos -->
        <div class="footer__section">
          <h3 class="footer__title">Contactos:</h3>
          <ul class="footer__list">
            <li>
              <i class="fas fa-phone"></i>
              970 265 729
            </li>
            <li>
              <i class="fab fa-whatsapp"></i>
              970 265 729
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              info@edcip.edu.pe
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              Av. República de Chile 478 <br />
              Oficina 802, Jesús María | Lima Perú.
            </li>
          </ul>
        </div>

        <!-- Redes Sociales -->
        <div class="footer__section">
          <h3 class="footer__title">Redes Sociales</h3>
          <div class="footer__icons">
            <a
              href="https://www.facebook.com/profile.php?id=61561921585595"
              target="_blank"
              class="footer__icon"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.tiktok.com/@consorcio.cecarpe"
              target="_blank"
              class="footer__icon"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.instagram.com/consorcioeducativocecar/"
              target="_blank"
              class="footer__icon"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Consultas -->
        <div class="footer__section footer__consultas">
          <p class="footer__consultas-text">Consultas</p>
          <a href="#" class="footer__button">
            <i class="fas fa-graduation-cap"></i> Verificación de Diplomas
          </a>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2025 WEBCECAR. Todos los derechos reservados.</p>
      </div>
    </footer>
  `;
}

// ---------------------------------------------------------------------------------
