import { navbar_creator, css_file_link, Event_listener_config_creator_dropdown_nav } from "../components/navbar/navbar_exporter.js";
const main = document.getElementById("main");
main.innerHTML += navbar_creator();
document.head.innerHTML += css_file_link;
Event_listener_config_creator_dropdown_nav();