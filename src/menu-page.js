
function loadMenuPage() {
    const content = document.getElementById("content");

    content.textContent = "";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    content.appendChild(menuTitle);

    const beverages = [
        {name: "Honey Tea", price: "$4"}, 
        {name: "Beary Tea", price: "$5"}
    ];
    const sides = [
        {name: "Toast & Jam", price: "$3"},
        {name: "Fresh Fruit", price: "$4"}
    ];
    const mainDishes = [
        {name: "Pancakes", price: "$8"},
        {name: "French Toast", price: "$9"},
        {name: "Honeycomb", price: "$10"}
    ];

    const createItems = (category, array) => {
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category;
        categoryTitle.style.borderBottom = "2px solid red";
        
        content.appendChild(categoryTitle);

        array.forEach((item) => {
            const element = document.createElement("h4");
            element.textContent = `${item.name} - ${item.price}`;
            content.appendChild(element);
        })
    }

    createItems("Beverages", beverages);
    createItems("Sides", sides);
    createItems("Main Dishes", mainDishes);
};

export { loadMenuPage };