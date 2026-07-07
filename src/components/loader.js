document.body.innerHTML += `<div id="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>
   `;
const loader_main = document.getElementById("loader");
const main = document.getElementById("main");
window.addEventListener("load", () => {
  loader_main.style.display = "none";
  main.style.display = "block";
});
