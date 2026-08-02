import { text_adder } from "../components/blocked_text_adder/text_adder.js";
import { scroll_single_time_animation_applier } from "../components/scroll_single_time_animation_applier/scroll_single_time_animation_applier_exporter.js";
const hero_section_main = document.getElementById("hero_section_main");
const owners_image_hero_section = document.getElementById(
  "owners_image_hero_section",
);
const owners_transparentname_hero_section = document.getElementById(
  "owners_transparentname_hero_section",
);
const text_ability_owner_in_main = document.getElementById(
  "text_ability_owner_main",
);
const greeting_by_owner_and_about_about_owner_main = document.getElementById(
  "greeting_by_owner_and_about_about_owner_main",
);
const our_services_images = document.getElementsByClassName(
  "our_services_service_img_main",
);
text_adder(
  text_ability_owner_in_main,
  "impacting users through the experience",
);
text_adder(
  greeting_by_owner_and_about_about_owner_main,
  "Hi I'm Ishan. A Web Developer creating absolute masterpieces.",
);
text_adder(
  document.getElementById("largetext_our_services_container_main"),
  "Apps that create impressions",
);
const load_owner_data = async (url, data) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "error fetching data from " + url + ".Error status" + response.status,
      );
    }
    const data_fetched = await response.json();
    return data_fetched.data;
  } catch (error) {
    console.log("Error fetching data from '" + url + "'");
  }
};
scroll_single_time_animation_applier(
  document.querySelectorAll("#stats_about_owner_main"),
  "large_to_normal_slick_right_entry_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#design_image_about_owner_main "),
  "large_to_normal_slick_entry_bottom_left_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#image_container_1_about_owner_main"),
  "large_to_normal_slick_right_entry_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll(
    "#greeting_by_owner_and_about_about_owner_main span",
  ),
  "large_to_normal_slick_right_entry_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#text_ability_owner_main span"),
  "large_to_normal_slick_entry_applied_elements",
);
scroll_single_time_animation_applier(
  our_services_images,
  "micro_to_normal_image_for_our_servies_animation_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#largetext_our_services_container_main span"),
  "large_to_normal_slick_entry_applied_elements",
);


text_adder(
  document.getElementById("largetext_our_projects_container_main"),
  "Projects we worked on",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#largetext_our_projects_container_main span"),
  "large_to_normal_slick_entry_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll(".project_container_our_projects_section_main"),
  "small_to_normal_image_animation_for_projects_containers_applied_elements",
);
// console.log(load_owner_data("../../owner_data/owner_stats.json","no_of_projects_completed"))
