import { navbar_creator, css_file_link_navbar, Event_listener_config_creator_dropdown_nav } from "../components/navbar/navbar_exporter.js";
import {
    footer_creator, css_file_link_footer
} from "../components/footer/footer_exporter.js";

const main = document.getElementById("main");
const head = document.head;
document.head.innerHTML += `<link rel="shortcut icon" href="../../public/images/favicon.ico" type="image/x-icon">`;
main.innerHTML += navbar_creator();
head.innerHTML += css_file_link_navbar;
setTimeout(() => {
    Event_listener_config_creator_dropdown_nav()
}, 100);

// ============================================>
main.innerHTML += footer_creator();
head.innerHTML += css_file_link_footer;