// Array of bird data
const birds = [
  {
    src: "http://www.outgrabe.net/bird00.jpg",
    desc: "Pardalote by fir0002 (CC-by-NC)"
  },
  {
    src: "http://www.outgrabe.net/bird01.jpg",
    desc: "Purple swamp hen by Toby Hudson (CC-by-SA)"
  },
  {
    src: "http://www.outgrabe.net/bird02.jpg",
    desc: "White-headed Stilt by JJ Harrison (CC-by-SA)"
  },
  {
    src: "http://www.outgrabe.net/bird03.jpg",
    desc: "Inland Thornbill by Peter Jacobs (CC-by-SA)"
  },
  {
    src: "http://www.outgrabe.net/bird04.jpg",
    desc: "Rose Robin by JJ Harrison (CC-by-SA)"
  }
];

// Function to change bird image and description
function changeBird(index) {
  const img = document.getElementById("bird-img");
  const desc = document.getElementById("bird-desc");

  img.src = birds[index].src;
  desc.textContent = birds[index].desc;
}
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");

  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
}
