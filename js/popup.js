

document.querySelector("#show-form").
addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-button").
addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});