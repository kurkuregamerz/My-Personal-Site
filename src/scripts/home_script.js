import { text_adder } from "../components/blocked_text_adder/text_adder.js";
import { scroll_single_time_animation_applier } from "../components/scroll_single_time_animation_applier/scroll_single_time_animation_applier_exporter.js";
import {
  zero_to_target_number
} from "../components/zero_to_target_number_single_time_animation/zero_to_target_number_single_time_animation.js";


const translations = [
  "Hello, I am",        
  "Hola, yo soy",      
  "নমস্কার, আমি",         
  "こんにちは、私は",     
  "Hallo, ich bin",    
  "नमस्ते, मैं हूँ",           
  "Ciao, sono",         
  "Привет, я",          
  "Bonjour, je suis",   
  "أهلاً، أنا",         
  "Hallo, ik ben",      
  "Olá, sou",           
  "你好，我是",          
  "안녕하세요, 저는",  
  "Merhaba, ben",
  "Xin chao, toi la",
  "Hello, I am",  
  
];



function welcoming(targetElement){
const observerCallback = async (mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
      // Use getComputedStyle to catch changes from both inline styles and CSS classes
      const currentDisplay = window.getComputedStyle(targetElement).display;

      if (currentDisplay === 'flex') {
        console.log('Element is now visible (flex)!');
        
      } else if (currentDisplay === 'none') {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(1000);
  for (let i = 0; i < translations.length; i++) {
   
    document.getElementById("hello_container").innerHTML = translations[i];
    await sleep(120);
    
    
        }
        await sleep(100)
  document.getElementById("main").style.display = "block";
  document.getElementById("Welcoming_page").style.animationName = "loader_exit";
  document.getElementById("hold-animation-welcoming").remove();
  await setTimeout(() => {
    
  }, 3000);
      }
    }
  }
};


const observer = new MutationObserver(observerCallback);
observer.observe(targetElement, { attributes: true })
}
welcoming(document.getElementById("loader"))
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
  document.getElementById("largetext_about_owner_main"),
  "impacting users through the experience",
);
text_adder(
  document.getElementById("greeting_by_owner_and_about_about_owner_main"),
  "Hi I'm Ishan. A Web Developer creating absolute masterpieces.",
);
text_adder(
  document.getElementById("largetext_our_services_container_main"),
  "Apps that create impressions",
);
text_adder(
  document.getElementById("largetext_our_development_process_container_main"),
  "A Devlopment process that works",
);
text_adder(
  document.getElementById("largetext_our_projects_container_main"),
  "Projects we worked on",
);
text_adder(
  document.getElementById("largetext_why_choose_me_container_main"),
  "Delivering sites with best results",
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
  document.querySelectorAll("#largetext_why_choose_me_container_main span"),
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
scroll_single_time_animation_applier(
  document.querySelectorAll(".animated_process_boxes"),
  "process_boxes_reveal_animation_applied",
);

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
  document.querySelectorAll("#developing_image_main"),
  "small_to_normal_image_animation_for_projects_containers_applied_elements",
);
scroll_single_time_animation_applier(
  document.querySelectorAll("#form_and_name_container"),
  "small_to_normal_image_animation_for_projects_containers_applied_elements",
);




  zero_to_target_number(
    document.querySelectorAll("#development_experience_number"),
    
    "+"
  );
  zero_to_target_number(
    document.querySelectorAll("#client_satisfaction_rate_number"),
    
    "%"
  );
  zero_to_target_number(
    document.querySelectorAll("#no_of_happy_customers_stats"),
    
    "+"
  );
document.querySelector("#navbar_main>ul").style.background = "transparent";