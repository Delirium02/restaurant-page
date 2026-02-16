import sweetsImageSource from "./images/honey-pancakes.jpg";

function loadHomePage() {
    const content = document.getElementById("content");

    content.textContent = "";

    const description = document.createElement("h3");
    description.classList.add("home-description");
    description.textContent = "Authentic honey-based dishes and beverages, served with a side of bear hugs.";
    content.appendChild(description);

    const subDescription = document.createElement("p");
    subDescription.classList.add("home-sub-description");
    subDescription.textContent = "Our honey is sourced from local beekeepers, ensuring the freshest and most flavorful experience for our customers. We are committed to sustainability and supporting our local community.";
    content.appendChild(subDescription);

    const hours = [
        { day: "Monday", timeframe: "8am - 6pm" },
        { day: "Tuesday", timeframe: "8am - 6pm" },
        { day: "Wednesday", timeframe: "8am - 6pm" },
        { day: "Thursday", timeframe: "8am - 6pm" },
        { day: "Friday", timeframe: "8am - 6pm" },
        { day: "Saturday", timeframe: "9am - 8pm" },
        { day: "Sunday", timeframe: "10am - 5pm" }
    ];

    const createItems = (array) => {
        array.forEach((item) => {
            const element = document.createElement("h4");
            element.textContent = `${item.day} - ${item.timeframe}`;
            content.appendChild(element);
        })
    }

    // Button to show / hide hours when clicked
    const showHours = document.createElement("button");
    showHours.classList.add("show-hours")
    showHours.textContent = "See Opening Hours";

    let hoursVisible = false;

    showHours.addEventListener("click", () => {
        if (!hoursVisible) {
            (createItems(hours));
            showHours.textContent = "Hide Hours"
            hoursVisible = true;
        } else {
            loadHomePage();
            hoursVisible = false;
        }
    });
    content.appendChild(showHours);

    const sweetsImage = document.createElement("img");
    sweetsImage.src = sweetsImageSource;
    sweetsImage.alt = "A palette of colorful sweets";
    content.appendChild(sweetsImage);
}


export { loadHomePage };