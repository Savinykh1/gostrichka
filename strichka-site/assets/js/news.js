(async function () {
  function getLang() {
    return localStorage.getItem("siteLang") || "uk";
  }

  function qs(name) {
    return new URLSearchParams(location.search).get(name);
  }

  async function loadPosts() {
    const res = await fetch("data/posts.json", { cache: "no-store" });
    if (!res.ok) throw new Error("Cannot load posts.json");
    return await res.json();
  }

  function uniqueTags(posts) {
    const set = new Set();
    posts.forEach(p => (p.tags || []).forEach(t => set.add(t)));
    return Array.from(set).sort();
  }

  function fmtDate(iso, lang) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(lang === "en" ? "en-GB" : "uk-UA", { year: "numeric", month: "short", day: "2-digit" });
    } catch { return iso; }
  }

  function renderList(posts) {
    const grid = document.getElementById("postsGrid");
    if (!grid) return;

    const lang = getLang();
    const searchInput = document.getElementById("searchInput");
    const tagFilter = document.getElementById("tagFilter");

    const query = (searchInput?.value || "").toLowerCase().trim();
    const tag = tagFilter?.value || "";

    const filtered = posts
      .slice()
      .sort((a,b) => (b.date || "").localeCompare(a.date || ""))
      .filter(p => {
        const title = (p.title?.[lang] || "").toLowerCase();
        const excerpt = (p.excerpt?.[lang] || "").toLowerCase();
        const matchesText = !query || title.includes(query) || excerpt.includes(query);
        const matchesTag = !tag || (p.tags || []).includes(tag);
        return matchesText && matchesTag;
      });

    if (!filtered.length) {
      grid.innerHTML = '<div class="muted">—</div>';
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const title = p.title?.[lang] || "";
      const excerpt = p.excerpt?.[lang] || "";
      const badges = (p.tags || []).map(t => `<span class="badge">${t}</span>`).join(" ");
      const date = fmtDate(p.date || "", lang);
      return `
        <div class="card post-card" role="link" tabindex="0" data-id="${p.id}">
          <div class="post-meta">
            <span>${date}</span>
            ${badges}
          </div>
          <h3 style="margin:10px 0 6px">${title}</h3>
          <p class="muted" style="margin:0; line-height:1.5">${excerpt}</p>
        </div>
      `;
    }).join("");

    grid.querySelectorAll("[data-id]").forEach(card => {
      const id = card.getAttribute("data-id");
      const go = () => location.href = `post.html?id=${encodeURIComponent(id)}`;
      card.addEventListener("click", go);
      card.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
    });
  }

  function renderPost(posts) {
    const article = document.getElementById("article");
    if (!article) return;

    const id = qs("id");
    const lang = getLang();
    const p = posts.find(x => String(x.id) === String(id));

    if (!p) {
      article.innerHTML = '<h1>404</h1><p class="muted">Post not found.</p>';
      return;
    }

    const title = p.title?.[lang] || "";
    const body = p.body?.[lang] || "";
    const date = fmtDate(p.date || "", lang);
    const tags = (p.tags || []).map(t => `<span class="badge">${t}</span>`).join(" ");

    article.innerHTML = `
      <div class="post-meta">
        <span>${date}</span>
        ${tags}
      </div>
      <h1>${title}</h1>
      ${body.split("\n").map(line => line.trim() ? `<p>${line}</p>` : "").join("")}
    `;
  }

  function fillTagFilter(posts) {
    const tagFilter = document.getElementById("tagFilter");
    if (!tagFilter) return;
    const tags = uniqueTags(posts);
    const existing = new Set(Array.from(tagFilter.options).map(o => o.value));
    tags.forEach(t => {
      if (existing.has(t)) return;
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      tagFilter.appendChild(opt);
    });
  }

  try {
    const posts = await loadPosts();

    // page: list
    const grid = document.getElementById("postsGrid");
    if (grid) {
      fillTagFilter(posts);
      renderList(posts);

      const searchInput = document.getElementById("searchInput");
      const tagFilter = document.getElementById("tagFilter");
      searchInput?.addEventListener("input", () => renderList(posts));
      tagFilter?.addEventListener("change", () => renderList(posts));
    }

    // page: single
    const article = document.getElementById("article");
    if (article) renderPost(posts);

    // rerender on language toggle
    document.getElementById("langToggle")?.addEventListener("click", () => {
      setTimeout(() => {
        if (grid) renderList(posts);
        if (article) renderPost(posts);
      }, 0);
    });

  } catch (e) {
    console.error(e);
    const grid = document.getElementById("postsGrid");
    if (grid) grid.innerHTML = '<div class="muted">Cannot load posts.</div>';
  }
})();