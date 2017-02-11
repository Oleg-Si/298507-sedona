var openPopup = document.querySelector(".open_modal");
var popup = document.querySelector(".modal");


popup.classList.add("modal_show");


openPopup.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal_show");
    popup.classList.toggle("fadeInDownBig");
});