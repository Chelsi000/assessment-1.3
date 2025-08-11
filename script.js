// Prove the JS file is loaded
console.log("script.js loaded ✅");

// Bird data
const birds = [
  { src: "http://www.outgrabe.net/bird00.jpg", desc: "Pardalote by fir0002 (CC-by-NC)" },
  { src: "http://www.outgrabe.net/bird01.jpg", desc: "Purple swamp hen by Toby Hudson (CC-by-SA)" },
  { src: "http://www.outgrabe.net/bird02.jpg", desc: "White-headed Stilt by JJ Harrison (CC-by-SA)" },
  { src: "http://www.outgrabe.net/bird03.jpg", desc: "Inland Thornbill by Peter Jacobs (CC-by-SA)" },
  { src: "http://www.outgrabe.net/bird04.jpg", desc: "Rose Robin by JJ Harrison (CC-by-SA)" }
];

// Change bird image + caption
function changeBird(index) {
  console.log("changeBird:", index);
  const img = document.getElementById("bird-img");
  const desc = document.getElementById("bird-desc");
  img.src = birds[index].src;
  img.alt = birds[index].desc;
  desc.textContent = birds[index].desc;
}

// Theme toggle (lowercase!)
function toggleTheme() {
  const html = document.documentElement;                 // <html>
  const current = html.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";   // <-- all lowercase
  html.setAttribute("data-theme", next);
  console.log("Theme:", next);
}

