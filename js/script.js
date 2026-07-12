(function () {
  "use strict";

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Sticky nav shadow on scroll */
  var nav = document.getElementById("siteNav");
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 8) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
    toggleBackToTop();
  }

  /* Mobile menu */
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  /* Reveal on scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Back to top */
  var backToTop = document.getElementById("backToTop");
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 480) backToTop.classList.add("is-visible");
    else backToTop.classList.remove("is-visible");
  }
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Copy email to clipboard */
  var copyButtons = document.querySelectorAll("[data-copy]");
  copyButtons.forEach(function (btn) {
    var originalHTML = btn.innerHTML;
    var isIconBtn = btn.classList.contains("copy-btn");
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () {
        btn.classList.add("is-copied");
        if (!isIconBtn) btn.textContent = "tersalin!";
        setTimeout(function () {
          btn.classList.remove("is-copied");
          if (!isIconBtn) btn.innerHTML = originalHTML;
        }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    });
  });

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Active nav link highlight */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
  if ("IntersectionObserver" in window && sections.length) {
    var navIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            var match = link.getAttribute("href") === "#" + id;
            link.classList.toggle("is-active", match);
          });
        });
      },
      { threshold: 0.4, rootMargin: "-76px 0px -55% 0px" }
    );
    sections.forEach(function (s) { navIo.observe(s); });
  }
})();
