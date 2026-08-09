import { text_adder } from "../components/blocked_text_adder/text_adder.js";
import { scroll_single_time_animation_applier } from "../components/scroll_single_time_animation_applier/scroll_single_time_animation_applier_exporter.js";
const hero_section_main = document.getElementById("hero_section_main");
const owners_image_hero_section = document.getElementById(
  "owners_image_hero_section",
);
const owners_transparentname_hero_section = document.getElementById(
  "owners_transparentname_hero_section",
);

const our_services_images = document.getElementsByClassName(
  "our_services_service_img_main",
);
text_adder(
   document.getElementById(
  "largetext_about_owner_main",
),
  "impacting users through the experience",
);
text_adder(
  document.getElementById(
  "greeting_by_owner_and_about_about_owner_main",
),
  "Hi I'm Ishan. A Web Developer creating absolute masterpieces.",
);
text_adder(
  document.getElementById("largetext_our_services_container_main"),
  "Apps that create impressions",
);
text_adder(
  document.getElementById("largetext_our_design_process_container_main"),
  "A Devlopment process that works",
);
text_adder(
  document.getElementById("largetext_our_projects_container_main"),
  "Projects we worked on",
);
scroll_single_time_animation_applier(
  document.querySelectorAll(".largetext_main span"),
  "large_to_normal_slick_entry_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll(
    "#greeting_by_owner_and_about_about_owner_main span",
  ),
  "large_to_normal_slick_right_entry_applied_elements",
);


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
  our_services_images,
  "micro_to_normal_image_for_our_servies_animation_applied_elements",
);

scroll_single_time_animation_applier(
  document.querySelectorAll(".project_container_our_projects_section_main"),
  "small_to_normal_image_animation_for_projects_containers_applied_elements",
);
// console.log(load_owner_data("../../owner_data/owner_stats.json","no_of_projects_completed"))
scroll_single_time_animation_applier(document.querySelectorAll(".animated_process_boxes"), "process_boxes_reveal_animation_applied")

const large_texts = document.querySelectorAll(".largetext_main");
Array.from(large_texts).forEach(large_text => {
  large_text.classList.add("coloring")
  let large_text_span_array = document.querySelectorAll(".coloring span")
  let i = 0;
  large_text_span_array.forEach(large_text_span => {
    
    
    if ((large_text_span_array.length / 2) < i) { return }
    large_text_span.style.color = "var(--theme-secondary-color)"
   
    i = i + 1
  
  });
  large_text.classList.remove("coloring")
});