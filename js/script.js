document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main__nav");
  const hamburgerIcon = hamburger.querySelector(".hamburger__icon");
  const navLinks = mainNav.querySelectorAll("a");

  // Function to toggle the menu
  const toggleMenu = () => {
    mainNav.classList.toggle("active");
    hamburger.classList.toggle("active"); // Toggle active on hamburger for icon change

    // Toggle Font Awesome icon classes
    if (hamburger.classList.contains("active")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
    } else {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
    }
  };

  // Event listener for hamburger icon click
  hamburger.addEventListener("click", toggleMenu);

  // Close menu when a navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Only close if the menu is active (i.e., on mobile)
      if (mainNav.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Close menu if window is resized to a larger screen
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      // Adjust breakpoint as needed
      mainNav.classList.remove("active");
      hamburger.classList.remove("active");
      // Ensure icon is reset to bars if menu is closed by resize
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
    }
  });
});
