

window.addEventListener('scroll', function(){
  var header = document.getElementById('header');
  header.classList.toggle('sticky', this.scrollY > 300);
})

//nav toggle
var navToggler = document.getElementById("nav-toggle");
var mainMenu = document.getElementById('main-menu');

navToggler.onclick = function () {
  navToggler.classList.toggle("active");
  mainMenu.classList.toggle("active");
};
document.onclick = function (e) {
  if (e.target.id !== "main-menu" && e.target.id !== "nav-toggle") {
    navToggler.classList.remove("active");
    mainMenu.classList.remove("active");
  }
};
    //counter up
    $('.counter-up').counterUp({
        delay: 20,
        time: 1000
        });