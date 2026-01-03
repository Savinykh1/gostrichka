(function () {
  const themeMap = {
    default: "assets/css/theme-default.css",
    dark: "assets/css/theme-dark.css",
    pastel: "assets/css/theme-pastel.css",
  };

  function setTheme(theme) {
    const link = document.getElementById("themeStylesheet");
    if (!link) return;

    const href = themeMap[theme] || themeMap.default;
    link.setAttribute("href", href);
    localStorage.setItem("siteTheme", theme);

    const select = document.getElementById("themeSelect");
    if (select) select.value = theme;
  }

  function initTheme() {
    const saved = localStorage.getItem("siteTheme") || "default";
    setTheme(saved);

    const select = document.getElementById("themeSelect");
    if (select) {
      select.value = saved;
      select.addEventListener("change", (e) => setTheme(e.target.value));
    }

    document.querySelectorAll("[data-theme]").forEach((btn) => {
      btn.addEventListener("click", () => setTheme(btn.dataset.theme));
    });
  }

  window.SiteTheme = { setTheme, initTheme };
})();