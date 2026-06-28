// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme — persisted; label shows the mode it switches TO
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const label = btn.querySelector(".toggle-label");
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const apply = (t) => {
    root.setAttribute("data-theme", t);
    const target = t === "dark" ? "Light" : "Dark";
    if (label) label.textContent = target;
    btn.setAttribute("title", "Switch to " + target.toLowerCase() + " theme");
  };
  apply(saved || (prefersDark ? "dark" : "light"));
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  });
})();

// Sticky-masthead hairline once scrolled
const mast = document.getElementById("masthead");
const onScroll = () => mast.classList.toggle("scrolled", window.scrollY > 6);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Hero: one orchestrated load sequence (the record prints line by line)
(function () {
  const items = document.querySelectorAll(".hero .stagger");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  items.forEach((el, i) => {
    if (reduce) { el.style.opacity = "1"; return; }
    el.style.animationDelay = i * 70 + "ms";
    el.classList.add("lit");
  });
})();

// Scroll-spy: highlight the nav link for the section in view
(function () {
  const links = Array.from(document.querySelectorAll(".mast-nav a"));
  const sections = new Map();
  links.forEach((a) => {
    const sec = document.getElementById(a.getAttribute("href").slice(1));
    if (sec) sections.set(sec, a);
  });
  if (!("IntersectionObserver" in window) || sections.size === 0) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => l.classList.remove("active"));
        const a = sections.get(e.target);
        if (a) a.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((_, sec) => io.observe(sec));
})();
