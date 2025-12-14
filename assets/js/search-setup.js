// let searchTheme = determineComputedTheme();
const ninjaKeys = document.querySelector("ninja-keys");

ninjaKeys.classList.add("dark");

const openSearchModal = () => {
  // collapse navbarNav if expanded on mobile
  const $navbarNav = $("#navbarNav");
  if ($navbarNav.hasClass("show")) {
    $navbarNav.collapse("hide");
  }
  ninjaKeys.open();
};
