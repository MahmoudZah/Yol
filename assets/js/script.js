// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Navbar background change on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background = "#000";
      navbar.style.position = "fixed";
    } else {
      navbar.style.background = "transparent";
      navbar.style.position = "absolute";
    }
  });

  // Play button click handler
  const playBtn = document.querySelector(".play-btn");
  if (playBtn) {
    playBtn.addEventListener("click", function () {
      // Add your video play functionality here
      console.log("Play button clicked");
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Initialize Video.js player
  if (document.getElementById("my-video")) {
    var player = videojs("my-video", {
      autoplay: false,
      preload: "auto",
      width: "100%",
      height: "auto",
    });
  }
});
