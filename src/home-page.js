
function loadHomePage() {
    const content = document.getElementById("content");

    content.textContent = "";

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "La Comida Española";
    content.appendChild(homeTitle);

    const description = document.createElement("p");
    description.textContent = "Authentic Spanish cuisine in the heart of the city.";
    content.appendChild(description);

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

    createItems(hours);
}

export { loadHomePage };