import {
  navbar_creator,
  css_file_link,
  Event_listener_config_creator_dropdown_nav
} from "../components/navbar_exporter.js";
const main = document.getElementById("main")
const hero_section_main = document.getElementById("hero_section_main");
const owners_image_hero_section = document.getElementById(
  "owners_image_hero_section",
);
const owners_transparentname_hero_section = document.getElementById(
  "owners_transparentname_hero_section",
);
main.innerHTML += navbar_creator();
document.head.innerHTML += css_file_link;
Event_listener_config_creator_dropdown_nav()
