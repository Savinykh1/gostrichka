(function () {
  function initFooterYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (window.SiteTheme && window.SiteTheme.initTheme) window.SiteTheme.initTheme();
    if (window.SiteI18n && window.SiteI18n.initLang) window.SiteI18n.initLang();
    initFooterYear();
  });
})();