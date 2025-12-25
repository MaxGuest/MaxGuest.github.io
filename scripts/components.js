// head
class THead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio for Max Guest</title>
        <!-- Google fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet"> 
        <!-- Add icon library -->
        <link href="fontawesome/css/fontawesome.min.css" rel="stylesheet">
        <link href="fontawesome/css/brands.min.css" rel="stylesheet">
        <link href="fontawesome/css/regular.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/styles.css">
    </head>
    `;
  }
}
customElements.define("t-head", THead);

// navbar
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
        <a class="logo" href="index.html">Max Guest</a>
        <ul class="nav-links">
            <li><a class="link" href="index.html#games-section">Games</a></li>
            <li><a class="link" href="contact.html">Contact</a></li>
            <li><a class="link" href="about.html">About</a></li>
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
        <ul class="social">
            <li>
                <a href="https://www.linkedin.com/in/max-guest-569853310/">
                <i class="fa fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a href="https://i-am-guest.itch.io/">
                <i class="fa fa-brands fa-itch-io"></i>
                </a>
            </li>
            <li>
                <a href="mailto:maxguestwork@gmail.com">
                <i class="fa fa-solid fa-envelope"></i>
                </a>
            </li>
        </ul>
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