import honeyPancakesImage from "./images/honey-pancakes.jpg";

function loadHomePage() {
  const content = document.getElementById("content");

  content.textContent = "";

  const description = document.createElement("h3");
  description.classList.add("home-description");
  description.textContent =
    "Authentic honey-based dishes and beverages, served with a side of bear hugs.";
  content.appendChild(description);

  const subDescription = document.createElement("p");
  subDescription.classList.add("home-sub-description");
  subDescription.textContent =
    "Our honey is sourced from local beekeepers, ensuring the freshest and most flavorful experience for our customers. We are committed to sustainability and supporting our local community.";
  content.appendChild(subDescription);

  const hours = [
    { day: "Monday", timeframe: "8am - 6pm" },
    { day: "Tuesday", timeframe: "8am - 6pm" },
    { day: "Wednesday", timeframe: "8am - 6pm" },
    { day: "Thursday", timeframe: "8am - 6pm" },
    { day: "Friday", timeframe: "8am - 6pm" },
    { day: "Saturday", timeframe: "9am - 8pm" },
    { day: "Sunday", timeframe: "10am - 5pm" },
  ];

  const createItems = (array) => {
    array.forEach((item) => {
      const element = document.createElement("h4");

      const dayColor = document.createElement("span");
      dayColor.textContent = item.day;
      dayColor.style.color = "#ef9fde";

      element.appendChild(dayColor);
      element.append(` - ${item.timeframe}`);

      content.appendChild(element);
    });
  };

  // Button to show / hide hours when clicked
  const showHours = document.createElement("button");
  showHours.classList.add("show-hours");
  showHours.textContent = "See Hours";

  let hoursVisible = false;

  showHours.addEventListener("click", () => {
    if (!hoursVisible) {
      createItems(hours);
      showHours.textContent = "Hide Hours";
      hoursVisible = true;
    } else {
      loadHomePage();
      hoursVisible = false;
    }
  });
  content.appendChild(showHours);

  const pancakesImage = document.createElement("img");
  pancakesImage.classList.add("home-image");
  pancakesImage.src = honeyPancakesImage;
  pancakesImage.alt = "Our delicious, homemade, special recipe honey pancakes!";
  content.appendChild(pancakesImage);
}

export { loadHomePage };
