/* =====================================
   PUNIKET.DEV — NAVIGATION INTERACTIONS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = navLinks.querySelectorAll("a");

    // NAVBAR SCROLL EFFECT

    function handleScroll() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    handleScroll();

    // MOBILE MENU

    function closeMenu() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    // CLOSE MENU AFTER CLICKING LINK

    navItems.forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    // CLOSE MENU WHEN CLICKING OUTSIDE

    document.addEventListener("click", (event) => {

        const clickedInside =
            navLinks.contains(event.target) ||
            menuToggle.contains(event.target);

        if (!clickedInside) {
            closeMenu();
        }

    });

    // CLOSE MENU WITH ESCAPE KEY

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

});