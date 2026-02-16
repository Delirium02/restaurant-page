function loadAboutPage() {
  const content = document.getElementById("content");

  content.textContent = "";

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  content.appendChild(aboutContainer);

  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  aboutContainer.appendChild(leftSide);

  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "Visit Us";
  aboutTitle.style.fontSize = "30px";
  leftSide.appendChild(aboutTitle);

  const address = document.createElement("p");
  address.textContent = "123 Gold Street, Melbourne VIC 3000";
  address.style.fontSize = "20px";
  leftSide.appendChild(address);

  const contacts = [
    { person: "Owner", number: "555-555-222", email: "ceo@honeyhaven.com.au" },
    {
      person: "Manager",
      number: "555-555-888",
      email: "bookings@honeyhaven.com.au",
    },
  ];

  contacts.forEach((contact) => {
    const card = document.createElement("div");
    card.classList.add("contact-card");

    card.innerHTML = `<span class="contact-name">${contact.person}:</span> ${contact.number} <br> ${contact.email}`;
    leftSide.appendChild(card);
  });

  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  aboutContainer.appendChild(rightSide);

  const mapImage = document.createElement("div");
  mapImage.classList.add("map-image");
  mapImage.textContent = "MAP PLACEHOLDER";
  rightSide.appendChild(mapImage);
}

export { loadAboutPage };
