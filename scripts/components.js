// header
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
        <div class="logo">Max Guest</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>
    `;
  }
}
customElements.define("t-header", THeader);

// footer
class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div class="social-media">
            <a href="https://i-am-guest.itch.io/">Itch.io</a>
        </div>
    </footer>
    `;
  }
}
customElements.define("t-footer", TFooter);

// Gamecard
class GameCard extends HTMLElement {
  connectedCallback() {
    const content = this.getAttribute("content");
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");
    const link = this.getAttribute("link");
    const linkText = this.getAttribute("linkText");

    this.innerHTML = `
      <article class="card">
        <div class="itch-widget-container">
            ${content}
        </div>
        <div class="card-body">
            <h1>${heading}</h1>
            <p>${details}</p>
            <a class="btn" href="${link}">${linkText}</a>
        </div>
    </article>
    `;
  }
}
customElements.define("game-card", GameCard);

// Embedded Games
class EmbeddedGame extends HTMLElement {
  connectedCallback() {
    const game = this.getAttribute("game");
    const heading1 = this.getAttribute("heading1");
    const details1 = this.getAttribute("details1");
    const heading2 = this.getAttribute("heading2");
    const details2 = this.getAttribute("details2");

    this.innerHTML = `
        <div class="embedded-games">
            <div class="games">
                ${game}
            </div>
            <div class="card">
                <div class="card-body">
                    <h1>${heading1}</h1>
                    <p>${details1}</p>
                    <h1>${heading2}</h1>
                    <p>${details2}</p>
                </div>
            </div>
        </div>
    `;
  }
}
customElements.define("embedded-game", EmbeddedGame);