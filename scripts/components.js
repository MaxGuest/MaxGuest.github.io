// header
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
        <div class="logo">Max Guest</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="contact-page/contact.html">Contact</a></li>
            <li><a href="about-page/about.html">About</a></li>
        </ul>
    </nav>
    `;
  }
}
customElements.define("t-header", THeader);