import { loadHomePage } from "./home-page.js";
import { loadMenuPage } from "./menu-page.js";
import { loadAboutPage } from "./about-page.js";
import "./style.css";

loadHomePage();

const homePage = document.querySelector(".home-btn");
const menuPage = document.querySelector(".menu-btn");
const aboutPage = document.querySelector(".about-btn");

homePage.addEventListener("click", () => {
  loadHomePage();
});

menuPage.addEventListener("click", () => {
  loadMenuPage();
});

aboutPage.addEventListener("click", () => {
  loadAboutPage();
});
