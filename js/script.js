document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".kn-navbar");
  const year = document.getElementById("year");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  if (year) year.textContent = new Date().getFullYear();

  const updateNavbar = () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 30);
  };
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      menuItems.forEach((item) => {
        const visible = selected === "all" || item.dataset.category === selected;
        item.classList.toggle("is-hidden", !visible);
      });
    });
  });

  // Tutup menu navigasi mobile setelah tautan dipilih.
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Contoh interaksi ringan: tampilkan sapaan saat pengunjung mencapai footer.
  const toastElement = document.getElementById("siteToast");
  if (toastElement && window.bootstrap) {
    const toast = bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 3500 });
    document.querySelectorAll('a[href="#kontak"]').forEach((link) => {
      link.addEventListener("click", () => toast.show());
    });
  }
});

