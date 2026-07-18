const animation_stopper = document.getElementById("hold-animation-loader");
if (!animation_stopper) {
  document.head.innerHTML += `<style id="hold-animation-loader">
#main *{
animation-play-state: paused !important;
transition:none !important;
}
</style>`;
}
document.body.innerHTML += `<div id="loader_container"
>
<div id="loader" >
  <div class="dotted_line_loader" id="dotted_line_1">
  <div class="dot1 loader_lines_dot"></div>
  <div class="dot2 loader_lines_dot"></div>
  <div class="dot3 loader_lines_dot"></div>
  <div class="dot4 loader_lines_dot"></div>
  <div class="dot5 loader_lines_dot"></div>
  <div class="dot6 loader_lines_dot"></div>
  </div>
  <div class="dotted_line_loader" id="dotted_line_2">
  <div class="dot1 loader_lines_dot"></div>
  <div class="dot2 loader_lines_dot"></div>
  <div class="dot3 loader_lines_dot"></div>
  <div class="dot4 loader_lines_dot"></div>
  <div class="dot5 loader_lines_dot"></div>
  <div class="dot6 loader_lines_dot"></div>
  </div>
</div>
</div>`;
const loader_main = document.getElementById("loader_container");
const main = document.getElementById("main");
let date = new Date(Date.now() + 86400000);
let should_run = 1;
async function loader_loading_dots_color_changer() {
  if (!should_run) {
    return
  }
  setTimeout(async () =>  loader_loading_dots_color_changer() , 800)
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  for (
    index = 1;
    index <=
    parseInt(
      Array.from(document.querySelectorAll(".loader_lines_dot")).length,
    ) /
    2;
    index++
  ) {
    const row1dot = document.querySelector("#dotted_line_1 .dot" + index);
    const row2dot = document.querySelector("#dotted_line_2 .dot" + index);
    row1dot.style.backgroundColor = "var(--theme-accent-color)";
    row2dot.style.backgroundColor = "var(--theme-accent-color)";
    await sleep(100);
    row1dot.style.backgroundColor = "rgba(206, 206, 206, 0.219)";
    row2dot.style.backgroundColor = "rgba(206, 206, 206, 0.219)";

  
  }
}
function loader_exit_line_dots() {
  const dots = document.querySelectorAll(".loader_lines_dot");
  const dotted_line_1 = document.getElementById("dotted_line_1");
  const dotted_line_2 = document.getElementById("dotted_line_2");
  dots.forEach(dot => {
    dot.style.backgroundColor = "var(--theme-accent-color)";

  });
  dotted_line_1.style.gridRow = 2;
  dotted_line_1.style.transform = "rotate(-45deg)"
  dotted_line_2.style.transform = "rotate(45deg)"
}

  loader_loading_dots_color_changer();


window.addEventListener("load", () => {  
  should_run = 0;
  // clearTimeout(async () => loader_loading_dots_color_changer(), 800);
  loader_exit_line_dots() 
  if (document.getElementById("hold-animation-loader")) {
    document.getElementById("hold-animation-loader").remove();
  }
  loader_main.style.animationName = "loader_exit";

  setTimeout(() => {
    loader_main.style.display = "none";
  }, 1500);
})
