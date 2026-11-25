document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const website = document.getElementById("website");

    function hideLoader() {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
            website.classList.add("website-ready");
        }, 700);

    }

    // Wait for page loading
    if (document.readyState === "complete") {
        hideLoader();
    } else {
        window.addEventListener("load", hideLoader, {
            once: true
        });
    }

});