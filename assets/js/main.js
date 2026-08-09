
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if(menu && nav){
    menu.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  // Static-site form helper: opens the user's email client with the submitted details.
  document.querySelectorAll("form[data-mailto]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const to = form.dataset.mailto;
      const subject = form.dataset.subject || "Website enquiry";
      const data = new FormData(form);
      let body = "";
      for (const [key, value] of data.entries()) {
        body += `${key}: ${value}\n`;
      }
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
});
