// Prove the JS file is loaded (you'll see this in DevTools Console)
console.log("script.js loaded ✅");

// Array of bird data
const birds = [
  {
    src: "http://www.outgrabe.net/bird00.jpg",
    desc: "Pardalote by fir0002 (CC-by-NC)",
    alt: "Pardalote on a perch",
  },
  {
    src: "http://www.outgrabe.net/bird01.jpg",
    desc: "Purple swamp hen by Toby Hudson (CC-by-SA)",
    alt: "Purple swamp hen standing on grass",
  },
  {
    src: "http://www.outgrabe.net/bird02.jpg",
    desc: "White-headed Stilt by JJ Harrison (CC-by-SA)",
    alt: "White-headed Stilt wading in water",
  },
  {
    src: "http://www.outgrabe.net/bird03.jpg",
    desc: "Inland Thornbill by Peter Jacobs (CC-by-SA)",
    alt: "Inland Thornbill perched on branch",
  },
  {
    src: "http://www.outgrabe.net/bird04.jpg",
    desc: "Rose Robin by JJ Harrison (CC-by-SA)",
    alt: "Rose Robin on a twig",
  },
];

// Change bird image + caption
function changeBird(index) {
  const img = document.getElementById("bird-img");
  const desc = document.getElementById("bird-desc");

  const bird = birds[index];
  if (!bird) return;

  img.src = bird.src;
  img.alt = bird.desc; // descriptive + license
  desc.textContent = bird.desc;

  console.log("Changed to:", bird.desc);
}

// Theme toggle
function toggleTheme() {
  const html = document.documentElement; // <html>
  const current = html.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  console.log("Theme:", next);
}


