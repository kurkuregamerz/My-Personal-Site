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
const text_ability_owner_in_main = document.getElementById("text_ability_owner_main");
const greeting_by_owner_and_about_about_owner_main = document.getElementById("greeting_by_owner_and_about_about_owner_main");
function text_adder(element, text) {

  const arrayofwords = text.split(" ");
  arrayofwords.forEach(word => {
    element.innerHTML += `<span class="`+element+`_text_inside">`+ word +`</span>`;
  });
  
} 
text_adder(text_ability_owner_in_main, "impacting users through the experience")
text_adder(greeting_by_owner_and_about_about_owner_main, "Hi I'm Ishan. A Web Developer creating absolute masterpieces" )
main.innerHTML += navbar_creator();
document.head.innerHTML += css_file_link;
Event_listener_config_creator_dropdown_nav()
