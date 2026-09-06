import { text_adder } from "../components/blocked_text_adder/text_adder.js";
import { scroll_single_time_animation_applier } from "../components/scroll_single_time_animation_applier/scroll_single_time_animation_applier_exporter.js";
import {
  zero_to_target_number
} from "../components/zero_to_target_number_single_time_animation/zero_to_target_number_single_time_animation.js";

scroll_single_time_animation_applier(
  document.querySelectorAll(
    "#development_experience_container,#client_satisfaction_rate_container",
  ),
  "right_to_left_entry_animation_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#performance_presentation_container"),
  "left_to_right_entry_animation_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#my_image_why_choose_me_container"),
  "left_to_right_entry_animation_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll(
    ".statistics_number_our_Services_main"
    ,),
  "top_to_bottom_entry_animation_applied_elements",
);
text_adder(
  document.getElementById("largetext_why_choose_me_container_main"),
  "Delivering sites with best results",
);
text_adder(
  document.getElementById("largetext_our_services_main_container_main"),
  "I Believe Fast and Well performing Website creates meaningful user experiences",
);
text_adder(
  document.getElementById("largetext_about_me_container_main"),
  "Who am I Really?",
);

scroll_single_time_animation_applier(
  document.querySelectorAll("#largetext_why_choose_me_container_main span"),
  "large_to_normal_slick_right_entry_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#largetext_our_services_main_container_main span"),
  "large_to_normal_slick_right_entry_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#largetext_about_me_container_main span"),
  "large_to_normal_slick_right_entry_applied_elements",
);

const large_texts = document.querySelectorAll(".largetext_main");
Array.from(large_texts).forEach((large_text) => {
  large_text.classList.add("coloring");
  let large_text_span_array = document.querySelectorAll(".coloring span");
  let i = 0;
  large_text_span_array.forEach((large_text_span) => {
    if (large_text_span_array.length / 2 < i) {
      return;
    }
    large_text_span.style.color = "var(--theme-secondary-color)";

    i = i + 1;
  });
  large_text.classList.remove("coloring");
});
Array.from(document.querySelectorAll("#largetext_reach_out_to_me_main span")).forEach(text => {
  text.style.color = "#ffffff"
});
Array.from(document.querySelectorAll("#largetext_about_me_container_main span")).forEach(text => {
  text.style.color = "#ffffff"
});


  zero_to_target_number(
    document.querySelectorAll("#development_experience_number"),
    
    "+"
  );
  zero_to_target_number(
    document.querySelectorAll("#client_satisfaction_rate_number"),
    
    "%"
);
 