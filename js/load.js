window.addEventListener("load", () => {
    const loaderContainer = document.querySelector(".loader-wrapper")
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 700);

    loader.addEventListener("transitionend", () => {
        const loaderCopy = loader.cloneNode(true);
        loaderContainer.parentNode.removeChild(loaderContainer);
    });
});