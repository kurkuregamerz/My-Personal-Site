document.head.innerHTML += `<style id="hold-animation-loader">
#main *{
animation-play-state: paused !important;
transition:none !important;
}
</style>`
document.body.innerHTML += `<div id="loader" ></div>`;
const loader_main = document.getElementById("loader");
const main = document.getElementById("main");
window.addEventListener("load", () => {
  if(
    document.getElementById("hold-animation-loader")) {
    document.getElementById("hold-animation-loader").remove()
  }
  loader.style.animationName = "loader_exit"

  setTimeout(() => {
    loader_main.style.display = "none";
  }, 2000);
  

});
