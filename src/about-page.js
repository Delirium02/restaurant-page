
function loadAboutPage() {
    const content = document.getElementById("content");

    content.textContent = "";

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "Contact Us";
    content.appendChild(aboutTitle)

    const contacts = [
        { person: "Owner", number: "555-555-222", email: "totallyRealEmail@notFake.com"},
        { person: "Co-owner", number: "555-555-555", email: "perfectlyRealEmail@notFake.com"},
        { person: "Manager", number: "555-555-888", email: "notFakeRealEmail@notFake.com"}
    ]

    contacts.forEach((item) => {
        const contact = document.createElement("h3");
        contact.textContent = `${item.person} - ${item.number} - ${item.email}`;
        content.appendChild(contact);
    })
}

export { loadAboutPage };