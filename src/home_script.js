import { navbar_creator } from '../src/components/navbar_exporter.js';

const main = document.getElementById("main")
const hero_section_main = document.getElementById("hero_section_main");
const owners_image_hero_section = document.getElementById("owners_image_hero_section");
const owners_transparentname_hero_section = document.getElementById("owners_transparentname_hero_section")
hero_section_main.innerHTML += navbar_creator();

const navbar_navigation_menu_button = document.getElementById("navbar_navigation_menu_button");
const navbar_about_navigation_button_line1 = document.getElementById("navbar_menu_button_line1")
const navbar_about_navigation_button_line2 = document.getElementById("navbar_menu_button_line2")
let navbar_navigation_menu_button_click_count = 0;
navbar_navigation_menu_button.addEventListener("click", () => {
    
    if (navbar_navigation_menu_button_click_count == 0) {
        navbar_about_navigation_button_line1.style.transform = `rotate(120deg)`;
        navbar_about_navigation_button_line2.style.transform = `rotate(-120deg)`;
        navbar_navigation_menu_button_click_count = 1;
    }
    else {
        navbar_about_navigation_button_line1.style.transform = `rotate(0deg)`;
        navbar_about_navigation_button_line2.style.transform = `rotate(0deg)`;
        navbar_navigation_menu_button_click_count = 0
    }
})