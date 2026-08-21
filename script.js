/* ===================== data ===================== */

const categories = [
  { name: "Birthday Cakes", desc: "Playful, colourful, made for candles", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80" },
  { name: "Wedding Cakes", desc: "Tiered elegance for your big day", img: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=700&q=80" },
  { name: "Anniversary Cakes", desc: "A sweet toast to years together", img: "https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=700&q=80" },
  { name: "Baby Shower Cakes", desc: "Soft pastels for tiny arrivals", img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80" },
  { name: "Kids Theme Cakes", desc: "Cartoons, characters and confetti", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80" },
  { name: "Custom Designer Cakes", desc: "Your idea, handcrafted in sponge", img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=700&q=80" },
];

const whyItems = [
  { icon: "🌿", title: "Real Ingredients", desc: "Farm butter, couverture chocolate, no artificial cream." },
  { icon: "🎂", title: "Baked To Order", desc: "Nothing sits in a freezer — every cake is fresh that day." },
  { icon: "🚚", title: "On-Time Delivery", desc: "Slot-based delivery so your cake arrives exactly when needed." },
  { icon: "🛡️", title: "Hygiene First", desc: "FSSAI-registered home kitchen with daily sanitation logs." },
];

const bestSellers = [
  { name: "Belgian Dark Chocolate Truffle", price: "₹899", flavour: "Chocolate", weight: "500g", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80" },
  { name: "Salted Caramel Drip", price: "₹1,049", flavour: "Caramel", weight: "500g", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80" },
  { name: "Rose Pistachio Jar Cake", price: "₹249", flavour: "Rose & Pistachio", weight: "200g jar", img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80" },
  { name: "Red Velvet Cloud", price: "₹949", flavour: "Red Velvet", weight: "500g", img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=700&q=80" },
];

const testimonials = [
  { name: "Ananya R.", text: "The anniversary cake looked even better in person than in the photos we sent. Every layer was moist and not overly sweet.", rating: 5 },
  { name: "Karthik S.", text: "Ordered a custom theme cake for my son's birthday with two days' notice. They pulled it off beautifully.", rating: 5 },
  { name: "Meera D.", text: "Genuinely tastes homemade, not bakery-mass-produced. The caramel drip cake has become our family's go-to.", rating: 4 },
];

const faqs = [
  { q: "How far in advance should I order?", a: "For regular cakes, 24–48 hours is ideal. Wedding tiers and heavily customised designer cakes need at least 5–7 days." },
  { q: "Do you offer eggless options?", a: "Yes, every flavour on our menu is available in an eggless version at no extra cost." },
  { q: "Can I upload a reference photo for a custom design?", a: "Yes — the Custom Cake Builder lets you attach a reference image along with your shape, flavour and theme choices." },
  { q: "What delivery areas do you cover?", a: "We currently deliver within city limits with a small radius surcharge; pickup from our home kitchen is always free." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80",
];

/* ===================== render ===================== */

function renderCategories() {
  const el = document.getElementById("categoryGrid");
  el.innerHTML = categories.map(c => `
    <div class="category-card reveal">
      <img src="${c.img}" alt="${c.name}">
      <div class="category-overlay"></div>
      <div class="category-text">
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderWhy() {
  const el = document.getElementById("whyGrid");
  el.innerHTML = whyItems.map(w => `
    <div class="why-card reveal">
      <div class="why-icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `).join("");
}

function renderProducts() {
  const el = document.getElementById("productGrid");
  el.innerHTML = bestSellers.map(p => `
    <div class="product-card reveal">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}">
        <button class="wishlist-btn" aria-label="Save">♥</button>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="product-meta">${p.flavour} · ${p.weight}</p>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button class="btn-small" onclick="alert('Enquiry sent for ${p.name.replace(/'/g, "\\'")}! We will get back to you shortly.')">Enquire</button>
        </div>
      </div>
    </div>
  `).join("");
}

function renderTestimonials() {
  const el = document.getElementById("testimonialGrid");
  el.innerHTML = testimonials.map(t => `
    <div class="testimonial-card reveal">
      <div class="stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="avatar">${t.name.charAt(0)}</div>
        <span>${t.name}</span>
      </div>
    </div>
  `).join("");
}

function renderGallery() {
  const el = document.getElementById("instaGrid");
  el.innerHTML = galleryImages.map(src => `
    <div class="insta-tile reveal">
      <img src="${src}" alt="Cake from Instagram gallery">
      <div class="insta-overlay">📷</div>
    </div>
  `).join("");
}

function renderFaq() {
  const el = document.getElementById("faqList");
  el.innerHTML = faqs.map((f, i) => `
    <div class="faq-item reveal ${i === 0 ? "open" : ""}" data-index="${i}">
      <button class="faq-question">
        <span>${f.q}</span>
        <span class="chev">▾</span>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join("");

  el.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      el.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* ===================== interactivity ===================== */

function initNav() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  });

  const menuToggle = document.getElementById("menuToggle");
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("mobile-open");
  });

  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("open");
  });

  // close mobile menu after clicking a link
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => navbar.classList.remove("mobile-open"));
  });
}

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* ===================== init ===================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderCategories();
  renderWhy();
  renderProducts();
  renderTestimonials();
  renderGallery();
  renderFaq();

  initNav();
  initBackToTop();
  initScrollReveal();
});