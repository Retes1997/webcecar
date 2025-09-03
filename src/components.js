// Navbar
export function Navbar() {
  return `
    <nav class="navbar">
      <div class="logo">WEBCECAR</div>
      <ul class="menu">
        <li><a href="/" data-link>Inicio</a></li>
        <li><a href="/nosotros" data-link>Nosotros</a></li>
        <li><a href="/metodologia" data-link>Metodología</a></li>
        <li><a href="/especializaciones" data-link>Especializaciones</a></li>
        <li><a href="/contacto" data-link>Contacto</a></li>
      </ul>
    </nav>
  `;
}

// Footer
export function Footer() {
  return `
    <footer class="footer">
      <p>© ${new Date().getFullYear()} WEBCECAR. Todos los derechos reservados.</p>
    </footer>
  `;
}
