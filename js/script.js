// Signup Modal starts

const signupModal = document.getElementById("signupModal");
const signupButtons = document.querySelectorAll(".openSignup");
const skipSignup = document.getElementById("skipSignup");


// Open Modal
signupButtons.forEach((button) => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        signupModal.classList.remove("hidden");

        document.body.classList.add("overflow-hidden");

    });

});


// Close Modal
if (skipSignup) {

    skipSignup.addEventListener("click", function () {

        signupModal.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");

    });

}


// Click Outside Modal Close
if (signupModal) {

    signupModal.addEventListener("click", function (e) {

        if (e.target === signupModal) {

            signupModal.classList.add("hidden");

            document.body.classList.remove("overflow-hidden");

        }

    });

}

// Signup Modal ends

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


// modal
// document.addEventListener("DOMContentLoaded", function () {

//     const openBtn = document.getElementById("openModal");
//     const modal = document.getElementById("loginModal");

//     if (!openBtn || !modal) {
//         console.log("Element not found");
//         return;
//     }

//     openBtn.addEventListener("click", function(e) {
//         e.preventDefault();

//         modal.classList.remove("hidden");
//         modal.classList.add("flex");
//     });

//     modal.addEventListener("click", function(e) {
//         if (e.target === modal) {
//             modal.classList.remove("flex");
//             modal.classList.add("hidden");
//         }
//     });

// });
