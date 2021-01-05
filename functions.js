document.addEventListener("DOMContentLoaded", () => {
  // Middle Wrappers
  let letters = document.querySelectorAll(".letter");

  anime({
    targets: letters,
    translateY: [-50, 0],
    delay: (el, i) => 300 + 70 * i,
    easing: "easeOutExpo",
    opacity: [0, 1],
  });

  anime({
    targets: ".middle-wrapper h3",
    translateY: [20, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: 1100,
  });

  anime({
    targets: ".middle-wrapper a",
    translateY: [-20, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: 1100,
  });

  // Nav Wrapper
  anime({
    targets: ".hamburger div",
    translateX: [-20, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: (el, i) => 1500 + 100 * i,
  });

  anime({
    targets: ".nav-container h1",
    translateY: [-20, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: 1500,
  });

  anime({
    targets: ".info-wrapper span",
    translateX: [20, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: 1500,
  });

  anime({
    targets: ".info-wrapper .circle",
    opacity: [0, 1],
    easing: "linear",
    delay: 1500,
  });

  anime({
    targets: ".info-wrapper .circle .one",
    height: ["0px", "8px"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: 1500,
  });

  anime({
    targets: ".info-wrapper .circle .two",
    height: ["0px", "6px"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: 1600,
  });

  anime({
    targets: ".info-wrapper .circle .three",
    height: ["0px", "15px"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: 1700,
  });

  //   scroll circle

  anime({
    targets: ".scroll-circle ",
    translateY: [-100, 0],
    translateX: [-30, -30],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: 2000,
  });

  console.log("Anime runs");
});
