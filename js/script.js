
// side bar 
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("right-[-100%]");
    mobileMenu.classList.add("right-0");

    overlay.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("right-[-100%]");

    overlay.classList.add("hidden");

    document.body.classList.remove("overflow-hidden");
}
// location 

const locationSelect = document.getElementById("locationSelect");
const searchBox = document.getElementById("searchBox");
const addressBox = document.getElementById("addressBox");
const address = document.getElementById("address");

locationSelect.addEventListener("change", function () {

    searchBox.classList.add("hide");
    addressBox.classList.add("hide");

    if (this.value === "search") {

        searchBox.classList.remove("hide");

    }

    if (this.value === "current") {

        addressBox.classList.remove("hide");

        if (navigator.geolocation) {

            address.innerHTML = "Getting your location...";

            navigator.geolocation.getCurrentPosition(getAddress, showError);

        } else {

            address.innerHTML = "Geolocation is not supported.";

        }

    }

});

async function getAddress(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    try {

        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        );

        const data = await response.json();

        address.innerHTML = data.display_name;

    }
    catch {

        address.innerHTML = "Unable to fetch address.";

    }

}

function showError(error) {

    switch (error.code) {

        case error.PERMISSION_DENIED:
            address.innerHTML = "Location permission denied.";
            break;

        case error.POSITION_UNAVAILABLE:
            address.innerHTML = "Location unavailable.";
            break;

        case error.TIMEOUT:
            address.innerHTML = "Location request timed out.";
            break;

        default:
            address.innerHTML = "Something went wrong.";
    }

}
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

// login starts

document.getElementById("signinLink").addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("signupModal").classList.add("hidden");
    document.getElementById("loginModal").classList.remove("hidden");
});
document.querySelectorAll(".closeModal").forEach(btn => {
    btn.addEventListener("click", function () {
        this.closest(".fixed").classList.add("hidden");
    });
});

// slider

 const swiper = new Swiper(".mySwiper", {

            // Vertical slider
            direction: "vertical",

            // 3 cards visible
            slidesPerView: 3,

            // Center card
            centeredSlides: true,

            // Gap between cards
            spaceBetween: 140,

            // Infinite loop
            loop: true,

            // Animation speed
            speed: 1000,

            // Auto slide
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
                
            on: {

                init: function () {
                    updateRotation(this);
                },

                slideChangeTransitionStart: function () {
                    updateRotation(this);
                }

            }

        });


        function updateRotation(swiper) {

            swiper.slides.forEach((slide) => {

                // Check if this is the active center slide
                if (slide.classList.contains("swiper-slide-active")) {

                    // Center card = normal
                    slide.style.transform = "rotate(0deg)";

                } else {

                    // Other cards = rotated
                    slide.style.transform = "rotate(160deg)";

                }

            });

        }
// tetsimonal slider
 const testimonialSwiper = new Swiper(
        ".testimonal-swiper",
        {

            /* =========================
               FREE MODE
            ========================== */

            freeMode: true,


            /* =========================
               AUTOPLAY
            ========================== */

            autoplay: {

                delay: 5000,

                disableOnInteraction: false,

            },


            /* =========================
               DESKTOP
               2 CARDS = 50% EACH
            ========================== */

            slidesPerView: 2,

            spaceBetween: 30,


            /* =========================
               ARROWS
            ========================== */

            navigation: {

                prevEl: ".testimonialPrev",

                nextEl: ".testimonialNext",

            },


            /* =========================
               RESPONSIVE
            ========================== */

            breakpoints: {

                /* Mobile */

                320: {

                    slidesPerView: 1,

                    spaceBetween: 15,

                },


                /* Tablet */

                768: {

                    slidesPerView: 1,

                    spaceBetween: 20,

                },


                /* Desktop */

                992: {

                    slidesPerView: 2,

                    spaceBetween: 30,

                }

            }

        }
    ); 
    // expert swiper 
  

    const expertSwiper = new Swiper(
        ".expert-swiper",
        {


            freeMode: true,



            autoplay: {

                delay: 3000,

                disableOnInteraction: false,

            },


            

            slidesPerView: 1,

            spaceBetween: 20,


           

            breakpoints: {


                /* 545px */

                545: {

                    slidesPerView: 2,

                    spaceBetween: 20,

                },


                /* 780px */

                780: {

                    slidesPerView: 2,

                    spaceBetween: 25,

                },


                /* 991px */

                991: {

                    slidesPerView: 4,

                    spaceBetween: 30,

                },


                /* 1200px */

                1200: {

                    slidesPerView: 4,

                    spaceBetween: 30,

                }

            }

        }

    );

