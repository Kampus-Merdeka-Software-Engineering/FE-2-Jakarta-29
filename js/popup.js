

document.querySelector("#show-form").
addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
});

document.querySelector(".popup .close-button").
addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
});