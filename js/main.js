/* ==========================================================================
   BROFIT MENSWEAR — SITE LOGIC
   You shouldn't need to edit this file. Edit js/products.js and js/config.js
   ========================================================================== */

const app = document.getElementById("app");

/* ---------------------------- helpers ---------------------------------- */

function formatPrice(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

function categoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}

function productById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function productsInCategory(catId) {
  return PRODUCTS.filter((p) => p.category === catId);
}

function whatsappLink(product) {
  const cat = categoryById(product.category);
  const lines = [
    `Hi ${BRAND.name} 👋`,
    "",
    "I would like to order:",
    "",
    `Product: ${product.name}`,
    `Category: ${cat ? cat.name : ""}`,
    `Price: ${formatPrice(product.price)}`,
    "",
    "Please share the available sizes and order details."
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
}

function generalWhatsappLink() {
  const text = encodeURIComponent(
    `Hi ${BRAND.name} 👋\n\nI'd like to know more about your collection.`
  );
  return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
}

const waIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2m0 1.8a8.1 8.1 0 0 1 5.75 2.38 8.08 8.08 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.13 8.12a8.1 8.1 0 0 1-4.14-1.13l-.3-.17-3.11.82.83-3.03-.19-.31a8.08 8.08 0 0 1-1.25-4.33c0-4.48 3.65-8.08 8.16-8.08M8.5 6.9c-.17 0-.44.06-.67.31-.23.25-.87.86-.87 2.08 0 1.22.9 2.4 1.02 2.57.13.17 1.75 2.79 4.31 3.8 2.13.85 2.56.68 3.03.63.46-.04 1.5-.61 1.71-1.2.21-.6.21-1.1.15-1.21-.06-.11-.23-.17-.48-.3-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.4-.79-1.91-.2-.5-.42-.43-.57-.44-.15-.01-.32-.01-.49-.01"/></svg>`;

const igIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`;

const pinIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`;

/* --------------------------- header / footer ---------------------------- */

function headerHTML() {
  return `
    <header class="site-header">
      <div class="bar">
        <a class="brandmark" href="#/">
          <img src="${BRAND.logo}" alt="${BRAND.name} logo" />
          <span>BROFIT</span>
        </a>
        <div class="header-icons">
          <a class="icon-btn" href="https://instagram.com/${BRAND.instagramHandle}" target="_blank" rel="noopener" aria-label="Instagram">${igIcon}</a>
        </div>
      </div>
    </header>`;
}

function footerHTML() {
  return `
    <footer>
      <a class="brandmark" href="#/">
        <img src="${BRAND.logo}" alt="${BRAND.name} logo" />
        <span>BROFIT MENSWEAR</span>
      </a>
      <div class="links">
        <a href="https://instagram.com/${BRAND.instagramHandle}" target="_blank" rel="noopener">Instagram</a>
        <a href="${generalWhatsappLink()}" target="_blank" rel="noopener">WhatsApp</a>
        <a href="${BRAND.googleMapsUrl}" target="_blank" rel="noopener">Location</a>
      </div>
      <div class="copy">${BRAND.locationName} · ${BRAND.locationAddress}</div>
    </footer>`;
}

/* ------------------------------- views ---------------------------------- */

function categoryCardHTML(cat) {
  return `
    <a class="category-card" href="#/category/${cat.id}">
      <div class="thumb"><img src="${cat.image}" alt="${cat.name}" loading="lazy" /></div>
      <div class="name">${cat.name}</div>
    </a>`;
}

function productCardHTML(p) {
  const cover = p.images[0];
  return `
    <a class="product-card" href="#/product/${p.id}">
      <div class="thumb">
        <img src="${cover}" alt="${p.name}" loading="lazy" />
        ${!p.available ? `<span class="badge">Out of stock</span>` : ""}
      </div>
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="price">${formatPrice(p.price)}</div>
        ${
          p.available
            ? `<button class="wa-btn" data-wa="${p.id}" type="button">${waIcon} Order on WhatsApp</button>`
            : `<span class="out-of-stock" style="padding:8px;">Out of stock</span>`
        }
      </div>
    </a>`;
}

function renderHome() {
  const featured = PRODUCTS.slice(0, 6);

  app.innerHTML = `
    ${headerHTML()}
    <section class="hero">
      <img class="crest" src="${BRAND.logo}" alt="${BRAND.name}" />
      <h1>Wear Your Confidence</h1>
      <p class="tag">PREMIUM MENSWEAR · ALANGULAM, TENKASI</p>
      <a class="cta" href="#/category/${CATEGORIES[0].id}">Explore Collection</a>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Categories</h2>
        <span class="sub">swipe →</span>
      </div>
      <div class="category-scroller">
        ${CATEGORIES.map(categoryCardHTML).join("")}
      </div>
    </section>
    
    <div class="wa-banner">
      <h2>Order in seconds</h2>
      <p>Message us on WhatsApp for sizing, stock and delivery.</p>
      <a class="wa-btn large" href="${generalWhatsappLink()}" target="_blank" rel="noopener">${waIcon} Chat on WhatsApp</a>
    </div>

    <a class="location-card" href="${BRAND.googleMapsUrl}" target="_blank" rel="noopener">
      <span class="pin">${pinIcon}</span>
      <span>
        <div class="name">${BRAND.locationName}</div>
        <div class="addr">${BRAND.locationAddress}</div>
      </span>
      <span class="go">Directions</span>
    </a>

    ${footerHTML()}
  `;
}

function renderCategory(catId) {
  const cat = categoryById(catId);
  if (!cat) return renderNotFound();
  const items = productsInCategory(catId);

  app.innerHTML = `
    ${headerHTML()}
    <a class="detail-back" href="#/">← Back</a>
    <section class="hero" style="padding-top:6px;">
      <h1 style="font-size:24px;">${cat.name}</h1>
      <p class="tag">${items.length} PRODUCT${items.length === 1 ? "" : "S"}</p>
    </section>
    <section class="section" style="padding-top:0;">
      <div class="product-grid">
        ${items.length ? items.map(productCardHTML).join("") : `<p style="color:var(--muted);padding:0 4px;">More pieces coming soon.</p>`}
      </div>
    </section>
    ${footerHTML()}
  `;
}

function renderProduct(id) {
  const p = productById(id);
  if (!p) return renderNotFound();
  const cat = categoryById(p.category);

  app.innerHTML = `
    ${headerHTML()}
    <a class="detail-back" href="#/category/${p.category}">← Back to ${cat ? cat.name : "catalogue"}</a>
    <div class="detail-gallery">
      ${p.images.map((src) => `<img src="${src}" alt="${p.name}" />`).join("")}
    </div>
    <div class="detail-body">
      <div class="cat">${cat ? cat.name.toUpperCase() : ""}</div>
      <h1>${p.name}</h1>
      <div class="price">${formatPrice(p.price)}</div>
      ${p.description ? `<p class="desc">${p.description}</p>` : ""}
      ${
        p.sizes && p.sizes.length
          ? `<div class="sizes">
               <div class="label">AVAILABLE SIZES</div>
               <div class="size-row">${p.sizes.map((s) => `<span class="size-chip">${s}</span>`).join("")}</div>
             </div>`
          : ""
      }
    </div>
    <div class="detail-cta">
      <div class="inner">
        ${
          p.available
            ? `<a class="wa-btn large" href="${whatsappLink(p)}" target="_blank" rel="noopener">${waIcon} Order on WhatsApp</a>`
            : `<div class="out-of-stock">Currently out of stock</div>`
        }
      </div>
    </div>
  `;
}

function renderNotFound() {
  app.innerHTML = `
    ${headerHTML()}
    <section class="hero">
      <h1 style="font-size:22px;">Page not found</h1>
      <a class="cta" href="#/">Back to home</a>
    </section>
    ${footerHTML()}
  `;
}

/* -------------------------------- router --------------------------------- */

function route() {
  const hash = window.location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);

  if (parts.length === 0) {
    renderHome();
  } else if (parts[0] === "category" && parts[1]) {
    renderCategory(parts[1]);
  } else if (parts[0] === "product" && parts[1]) {
    renderProduct(parts[1]);
  } else {
    renderNotFound();
  }

  window.scrollTo({ top: 0, behavior: "instant" in window.scrollTo ? "instant" : "auto" });
  app.classList.remove("app-anim");
  void app.offsetWidth;
  app.style.animation = "none";
  void app.offsetWidth;
  app.style.animation = "";
}

window.addEventListener("hashchange", route);

/* Product card "Order on WhatsApp" buttons open wa.me without navigating the card link */
app.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-wa]");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const product = productById(btn.getAttribute("data-wa"));
  if (product) window.open(whatsappLink(product), "_blank", "noopener");
});

/* ------------------------------- intro ------------------------------------ */

function initIntro() {
  const intro = document.getElementById("intro");
  const logoImg = intro.querySelector("img");
  logoImg.src = BRAND.logo;

  const finish = () => intro.classList.add("hide");
  const timer = setTimeout(finish, 1600);
  intro.addEventListener("click", () => {
    clearTimeout(timer);
    finish();
  });
}

initIntro();
route();
