

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("right-[-100%]");
    mobileMenu.classList.add("right-0");

    overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("right-[-100%]");

    overlay.classList.add("hidden");
}

// // modal 
// const modal = document.getElementById("loginModal");
// const openBtn = document.getElementById("openModal");
// const closeBtn = document.getElementById("closeModal");

// openBtn.addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     modal.classList.add("flex");
//     document.body.style.overflow = "hidden";
// });

// closeBtn.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     modal.classList.remove("flex");
//     document.body.style.overflow = "auto";
// });

// modal.addEventListener("click", function (e) {
//     if (e.target === modal) {
//         modal.classList.add("hidden");
//         modal.classList.remove("flex");
//         document.body.style.overflow = "auto";
//     }
// });