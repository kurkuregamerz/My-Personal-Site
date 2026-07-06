import { navbar_creator } from '../src/components/navbar_exporter.js';

const main = document.getElementById("main")
const hero_section_main = document.getElementById("hero_section_main");
const owners_image_hero_section = document.getElementById("owners_image_hero_section");
const owners_transparentname_hero_section = document.getElementById("owners_transparentname_hero_section")
hero_section_main.innerHTML += navbar_creator();

const dropdown_menu_navbar = document.getElementById("dropdown_menu_navbar")
const navbar_navigation_menu_button = document.getElementById("navbar_navigation_menu_button");
const dropdown_menu_navbar_navigation_menu_button = document.getElementById("dropdown_menu_navbar_navigation_menu_button")
const navbar_menu_navigation_button_line1 = document.getElementById("navbar_menu_button_line1")
const navbar_menu_navigation_button_line2 = document.getElementById("navbar_menu_button_line2");
const dropdown_menu_navbar_navigation_menu_button_line1 = document.getElementById("dropdown_menu_navbar_navigation_menu_button_line1")
const dropdown_menu_navbar_navigation_menu_button_line2 = document.getElementById("dropdown_menu_navbar_navigation_menu_button_line2");


let navbar_navigation_menu_button_click_count = 0;
navbar_navigation_menu_button.addEventListener("click", () => {
    
    if (navbar_navigation_menu_button_click_count == 0) {
        navbar_menu_navigation_button_line1.style.transform = `rotate(-120deg)`;
        navbar_menu_navigation_button_line2.style.transform = `rotate(120deg)`;
        dropdown_menu_navbar_navigation_menu_button_line1.style.transform = `rotate(-120deg)`;
        dropdown_menu_navbar_navigation_menu_button_line2.style.transform = `rotate(120deg)`;
      dropdown_menu_navbar.style.height = "100%";
        dropdown_menu_navbar.style.visibility = "visible";
        navbar_navigation_menu_button_click_count = 1;
    }
    else {
        navbar_menu_navigation_button_line1.style.transform = `rotate(0deg)`;
        navbar_menu_navigation_button_line2.style.transform = `rotate(0deg)`;
        dropdown_menu_navbar_navigation_menu_button_line1.style.transform = `rotate(0deg)`;
        dropdown_menu_navbar_navigation_menu_button_line2.style.transform = `rotate(0deg)`;
        dropdown_menu_navbar.style.height = "0%";
        dropdown_menu_navbar.style.visibility = "hidden"
        navbar_navigation_menu_button_click_count = 0

    }
});
dropdown_menu_navbar_navigation_menu_button.addEventListener("click", () => {
    

        navbar_menu_navigation_button_line1.style.transform = `rotate(0deg)`;
        navbar_menu_navigation_button_line2.style.transform = `rotate(0deg)`;
        dropdown_menu_navbar_navigation_menu_button_line1.style.transform = `rotate(0deg)`;
        dropdown_menu_navbar_navigation_menu_button_line2.style.transform = `rotate(0deg)`;
        dropdown_menu_navbar.style.height = "0%";
        dropdown_menu_navbar.style.visibility = "hidden"
        navbar_navigation_menu_button_click_count = 0;

    
})