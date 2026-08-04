import { navbar_creator, } from "../components/navbar/navbar_exporter.js";
import {
    footer_creator
} from "../components/footer/footer_exporter.js";
import { text_adder } from "../components/blocked_text_adder/text_adder.js";
import {scroll_single_time_animation_applier } from "../components/scroll_single_time_animation_applier/scroll_single_time_animation_applier_exporter.js"
const main = document.getElementById("main");
const head = document.head;
document.head.innerHTML += `<link rel="shortcut icon" href="../../public/images/favicon.ico" type="image/x-icon">`;
navbar_creator()


// ============================================>
footer_creator();



window.addEventListener("DOMContentLoaded", () => {
setTimeout(() => {
        scroll_single_time_animation_applier(document.querySelectorAll("#footer_main *"), "footer_reveal_from_bottom_applied", {
    root: null,
    threshold: 0.1,
    rootMargin: `0px`
})
}, 1000);

  
})

