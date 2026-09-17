const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const copyButton = document.querySelector("[data-copy-email]");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.getAttribute("data-copy-email");
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "已复制 ✓";
      window.setTimeout(() => { copyButton.textContent = "复制邮箱"; }, 1800);
    } catch {
      copyButton.textContent = email;
    }
  });
}
