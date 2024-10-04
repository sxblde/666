const parallax = document.getElementById ("hero-top");

window.addEventListener("scroll", function ()
{
let offset = window.pageYOffset;
parallax.style.BackgroundPositionY = offset * 0.7 + "px";
})
