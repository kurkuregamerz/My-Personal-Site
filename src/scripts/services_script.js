import { text_adder } from "../components/blocked_text_adder/text_adder.js";
import { scroll_single_time_animation_applier } from "../components/scroll_single_time_animation_applier/scroll_single_time_animation_applier_exporter.js";
text_adder(
  document.getElementById("largetext_our_services_container_main"),
  "Services we provide",
);

scroll_single_time_animation_applier(
    document.querySelectorAll("#largetext_our_services_container_main span"),
    "large_to_normal_slick_right_entry_applied_elements",
)
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
scroll_single_time_animation_applier(
    document.querySelectorAll(".service_in_cards_container_main"),
  "bottom_to_top_entry_services_cards_main_applied_elements",
 
)