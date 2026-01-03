(function () {
  const dict = {
    uk: {
      nav_home: "Головна",
      nav_news: "Новини",
      nav_gallery: "Галерея",
      nav_projects: "Наші проєкти",
      nav_about: "Про нас",
      nav_contacts: "Контакти",
      footer_contacts: "Контакти",
      footer_news: "Новини",

      home_title: "Стрічкоткацька фабрика",
      home_lead: "Незалежна українська неприбуткова культурна організація. Концерти, резиденції та студійні сесії Ambience.",
      home_card1_title: "Місія",
      home_card1_text: "Розвиваємо сучасну українську культуру через звук, інновації та міждисциплінарні практики.",
      home_card2_title: "Ambience",
      home_card2_text: "Іммерсивні події, експериментальна музика та просторове звучання (Ambisonic / 3D audio).",
      home_card3_title: "Партнерства",
      home_card3_text: "Відкриті до співпраці з фондами, інституціями та локальними спільнотами.",
      home_cta_news: "Перейти в новини",
      home_cta_projects: "Подивитись проєкти",
      home_video_caption: "Відео-презентація / фрагмент з події",

      templates_title: "Шаблони дизайну",
      templates_subtitle: "Обери стиль — він збережеться у браузері (localStorage).",
      templates_default_desc: "Стандартний, нейтральний.",
      templates_dark_desc: "Темний, контрастний.",
      templates_pastel_desc: "М’який, світлий.",

      news_title: "Новини",
      news_subtitle: "Швидке додавання: редагуй файл data/posts.json.",
      news_search_ph: "Пошук...",
      news_tag_all: "Усі теги",
      post_back: "Назад до новин",

      gallery_title: "Галерея",
      gallery_subtitle: "Додай фото в assets/img/ і заміни блоки нижче.",
      gallery_ph: "Фото / афіша / кадр",

      projects_title: "Наші проєкти",
      projects_subtitle: "Короткий перелік напрямків та активностей.",
      projects_ambience: "Серія концертів, резиденцій та студійних сесій з фокусом на експериментальну музику і просторовий звук.",
      projects_edu_title: "Освіта",
      projects_edu: "Воркшопи, лекції та практики про звук, слухання, продакшн, медіа-мистецтво.",
      projects_social_title: "Соціальні програми",
      projects_social: "Формати, що підсилюють відновлення спільнот через мистецтво та слухацький досвід.",

      about_title: "Про нас",
      about_subtitle: "Короткий опис місії та напрямків діяльності для грантових заявок і партнерств.",
      about_h2_1: "Хто ми",
      about_p_1: "Стрічкоткацька фабрика — незалежна українська неприбуткова культурна організація, що працює на перетині сучасного мистецтва, експериментальної музики та звукових технологій.",
      about_h2_2: "Місія",
      about_p_2: "Розвивати сучасну українську культуру через звук, підтримувати інновації, міждисциплінарність і соціально значущі мистецькі формати.",
      about_h2_3: "Що ми робимо",
      about_li_1: "Концерти, іммерсивні перформанси, серія Ambience.",
      about_li_2: "Резиденції та студійні сесії для артистів.",
      about_li_3: "Освітні події: лекції, воркшопи, практики слухання.",
      about_li_4: "Партнерські програми та культурні колаборації.",

      contacts_title: "Контакти",
      contacts_tagline: "Незалежна українська неприбуткова культурна організація",
      contacts_address: "Адреса",
      contacts_address_line1: "вул. Нижньоюрківська, 31",
      contacts_address_line2: "м. Київ, 04080, Україна",
      contacts_phone: "Телефон / месенджери",
      contacts_social: "Соціальні мережі",
      contacts_people: "Контактні особи",
      contacts_person1: "Секретар — Андрій Савіних",
      contacts_person2: "Керівник — Сергій Вологжанінов",
    },
    en: {
      nav_home: "Home",
      nav_news: "News",
      nav_gallery: "Gallery",
      nav_projects: "Projects",
      nav_about: "About",
      nav_contacts: "Contacts",
      footer_contacts: "Contacts",
      footer_news: "News",

      home_title: "Strichkotkatska Fabryka",
      home_lead: "Independent Ukrainian non-profit cultural organization. Ambience concerts, residencies, and studio sessions.",
      home_card1_title: "Mission",
      home_card1_text: "We develop contemporary Ukrainian culture through sound, innovation, and interdisciplinary practices.",
      home_card2_title: "Ambience",
      home_card2_text: "Immersive events, experimental music, and spatial sound (Ambisonic / 3D audio).",
      home_card3_title: "Partnerships",
      home_card3_text: "Open to collaboration with funds, institutions, and local communities.",
      home_cta_news: "Go to news",
      home_cta_projects: "View projects",
      home_video_caption: "Presentation video / event excerpt",

      templates_title: "Design templates",
      templates_subtitle: "Choose a style — it will be saved in your browser (localStorage).",
      templates_default_desc: "Standard, neutral.",
      templates_dark_desc: "Dark, high-contrast.",
      templates_pastel_desc: "Soft, light.",

      news_title: "News",
      news_subtitle: "Quick add: edit data/posts.json.",
      news_search_ph: "Search...",
      news_tag_all: "All tags",
      post_back: "Back to news",

      gallery_title: "Gallery",
      gallery_subtitle: "Add photos to assets/img/ and replace placeholders below.",
      gallery_ph: "Photo / poster / frame",

      projects_title: "Projects",
      projects_subtitle: "A short list of directions and activities.",
      projects_ambience: "A series of concerts, residencies, and studio sessions focused on experimental music and spatial sound.",
      projects_edu_title: "Education",
      projects_edu: "Workshops, talks, and listening practices about sound, production, and media art.",
      projects_social_title: "Social programs",
      projects_social: "Formats that support community recovery through art and listening experiences.",

      about_title: "About",
      about_subtitle: "A concise mission and activity overview for grant applications and partnerships.",
      about_h2_1: "Who we are",
      about_p_1: "Strichkotkatska Fabryka is an independent Ukrainian non-profit cultural organization working at the intersection of contemporary art, experimental music, and sound technologies.",
      about_h2_2: "Mission",
      about_p_2: "To develop contemporary Ukrainian culture through sound, supporting innovation, interdisciplinarity, and socially meaningful artistic formats.",
      about_h2_3: "What we do",
      about_li_1: "Concerts, immersive performances, the Ambience series.",
      about_li_2: "Artist residencies and studio sessions.",
      about_li_3: "Educational events: talks, workshops, listening practices.",
      about_li_4: "Partnership programs and cultural collaborations.",

      contacts_title: "Contacts",
      contacts_tagline: "Independent Ukrainian non-profit cultural organization",
      contacts_address: "Address",
      contacts_address_line1: "Nyzhnoiurkivska St., 31",
      contacts_address_line2: "Kyiv, 04080, Ukraine",
      contacts_phone: "Phone / Messengers",
      contacts_social: "Social media",
      contacts_people: "Contact persons",
      contacts_person1: "Secretary — Andrii Savinykh",
      contacts_person2: "Director — Serhii Volohzhaninov",
    }
  };

  function setLang(lang) {
    localStorage.setItem("siteLang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "uk";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[lang] && dict[lang][key]) el.setAttribute("placeholder", dict[lang][key]);
    });
  }

  function toggleLang() {
    const current = localStorage.getItem("siteLang") || "uk";
    setLang(current === "uk" ? "en" : "uk");
  }

  function initLang() {
    const saved = localStorage.getItem("siteLang") || "uk";
    setLang(saved);

    const btn = document.getElementById("langToggle");
    if (btn) btn.addEventListener("click", toggleLang);
  }

  window.SiteI18n = { initLang, setLang, toggleLang };
})();