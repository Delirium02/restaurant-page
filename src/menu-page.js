import honeyPancakesImage from "./images/honey-pancakes-2.jpg";

function loadMenuPage() {
  const content = document.getElementById("content");

  content.textContent = "";

  const parentElement = document.createElement("div");
  parentElement.classList.add("parent-element");
  content.appendChild(parentElement);

  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container");
  parentElement.appendChild(leftContainer);

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Our Menu";
  leftContainer.appendChild(menuTitle);

  const beverages = [
    { name: "Honey Tea", price: "$4" },
    { name: "Beary Tea", price: "$5" },
  ];
  const sides = [
    { name: "Toast & Jam", price: "$3" },
    { name: "Fresh Fruit", price: "$4" },
  ];
  const mainDishes = [
    { name: "Pancakes", price: "$8" },
    { name: "French Toast", price: "$9" },
    { name: "Honeycomb", price: "$10" },
  ];

  const createItems = (category, array) => {
    const categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("category-title");
    categoryTitle.textContent = category;

    leftContainer.appendChild(categoryTitle);

    array.forEach((item) => {
      const element = document.createElement("h4");
      element.textContent = `${item.name} - ${item.price}`;
      leftContainer.appendChild(element);
    });
  };

  createItems("Beverages", beverages);
  createItems("Sides", sides);
  createItems("Main Dishes", mainDishes);

  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container");
  parentElement.appendChild(rightContainer);

  const pancakesImage = document.createElement("img");
  pancakesImage.classList.add("menu-image");
  pancakesImage.src = honeyPancakesImage;
  pancakesImage.alt = "Our delicious, homemade, special recipe honey pancakes!";
  rightContainer.appendChild(pancakesImage);
}

export { loadMenuPage };
