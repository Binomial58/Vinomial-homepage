const page = document.body.dataset.page;

const navLink = document.querySelector(`[data-nav="${page}"]`);
if (navLink) {
  navLink.setAttribute("aria-current", "page");
}

for (const yearNode of document.querySelectorAll("[data-year]")) {
  yearNode.textContent = String(new Date().getFullYear());
}
