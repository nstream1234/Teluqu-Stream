const posters = [
  {
    img: "Posters/192082f9663ab4c4d6faed31e3282707.jpg",  // 27x40 inch ratio image
    link: "https://trustanyone321.github.io/Jathi-Ratnalu/"
  },
  {
    img: "Posters/830a4aa6d9e74bc4b044a312d108a370.jpg",
    link: "https://trustanyone321.github.io/Baahubali-The-Beginning/"
  },
  {
    img: "Posters/8b51d0e9d88066132c7869adefffcb9f.jpg",
    link: "https://trustanyone321.github.io/Pelli-Choopulu/"
  },
  {
    img: "Posters/b4115a60b1a3eb802ed84c08b175aae3.jpg",
    link: "https://trustanyone321.github.io/Mad/"
  },
  {
    img: "Posters/ee-nagaraniki-emaindi-poster.jpg",
    link: "https://trustanyone321.github.io/Ee-Nagaraniki-Emaindi/"
  }
];

// Inject into grid
const grid = document.getElementById("posterGrid");

posters.forEach(p => {
  const card = document.createElement("a");
  card.href = p.link;
  card.classList.add("poster-card");

  card.innerHTML = `<img src="${p.img}" alt="Poster">`;

  grid.appendChild(card);
});