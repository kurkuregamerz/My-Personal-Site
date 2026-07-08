document.body.innerHTML += `<div id="loader" ></div>`;
const loader_main = document.getElementById("loader");
const main = document.getElementById("main");
window.addEventListener("load", () => {
  
  loader.style.animationName = "loader_exit"

  setTimeout(() => {
    loader_main.style.display = "none";
  }, 2000);
  

});
