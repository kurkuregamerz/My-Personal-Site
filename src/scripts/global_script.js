import { navbar_creator, css_file_link_navbar, Event_listener_config_creator_dropdown_nav } from "../components/navbar/navbar_exporter.js";
import {
    footer_creator, css_file_link_footer
} from "../components/footer/footer_exporter.js"
const main = document.getElementById("main");
main.innerHTML += navbar_creator();
document.head.innerHTML += css_file_link_navbar;
Event_listener_config_creator_dropdown_nav();
// ============================================><
main.innerHTML += footer_creator();
document.head.innerHTML += css_file_link_footer;