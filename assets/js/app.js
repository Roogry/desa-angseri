var btnToTop = document.getElementById("to-top");

window.onscroll = function () {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      btnToTop.style.bottom = '40px';
   } else {
      btnToTop.style.bottom = '-60px';
   }
}

function scrollTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById("to-top").addEventListener("click", scrollTop);