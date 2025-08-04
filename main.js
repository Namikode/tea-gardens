let scrollBtn = document.getElementById("scroll-top");
scrollBtn.style.display = "none";

window.onscroll = function scrollTopBtn() {
    if ((document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) && window.innerWidth > 1024) {
        
            scrollBtn.style.display = "block";
       } else {
            scrollBtn.style.display = "none";
        }
}

function scrollToTop() {
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}