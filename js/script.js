var btnOpenPopup = document.querySelector(".open_modal");
var popup = document.querySelector(".modal");
var form = popup.querySelector("form");
var dateEntry = document.getElementById("entry");
var dateExit = document.getElementById("exit");

popup.classList.add("modal_show");

btnOpenPopup.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal_show");
    popup.classList.toggle("fadeInDownBig");
});

form.addEventListener("submit", function(event) {
    if (!dateEntry.value || !dateExit.value) {
        event.preventDefault();
        popup.classList.remove("modal_error");
        popup.classList.add("modal_error");
    }
});