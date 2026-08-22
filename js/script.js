
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

// why choose us slider

  document.addEventListener("DOMContentLoaded", function () {

    const whyChooseSwiper = new Swiper(".whyChooseSwiper", {

      slidesPerView: 1.15,
      spaceBetween: 10,

      grabCursor: true,

      simulateTouch: true,
      allowTouchMove: true,

      mousewheel: false,

      breakpoints: {

        480: {
          slidesPerView: 1.25,
          spaceBetween: 10
        },

        640: {
          slidesPerView: 1.5,
          spaceBetween: 12
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 12
        },

        1024: {
          slidesPerView: 2,
          spaceBetween: 12
        },

        1280: {
          slidesPerView: 2,
          spaceBetween: 14
        }

      }

    });

  });
// expert swiper  slider section


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
// popular services 
const popularServiceSwiper = new Swiper(".popular-service-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },

        545: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        780: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const testimonialSwiper = new Swiper(".testimonal-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,

  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    991: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    780: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    545: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});


// Custom Previous Button
document.querySelector(".testimonialPrev").addEventListener("click", () => {
  testimonialSwiper.slidePrev();
});


// Custom Next Button
document.querySelector(".testimonialNext").addEventListener("click", () => {
  testimonialSwiper.slideNext();
});
//   FAQ Accordian

console.log("FAQ JS loaded");

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const currentItem = this.parentElement;
        const currentContent = currentItem.querySelector(".faq-content");
        const currentPath = currentItem.querySelector(".faq-path");


        // Close other FAQ items
        document.querySelectorAll(".faq-item").forEach((item) => {

            if (item !== currentItem) {

                item.classList.remove("active");

                item.querySelector(".faq-content").style.maxHeight = "0px";

                item.querySelector(".faq-path").setAttribute(
                    "d",
                    "M1 9H9M9 9H17M9 9V17M9 9V1"
                );

            }

        });


        // Toggle current FAQ item
        if (currentItem.classList.contains("active")) {

            currentItem.classList.remove("active");

            currentContent.style.maxHeight = "0px";

            currentPath.setAttribute(
                "d",
                "M1 9H9M9 9H17M9 9V17M9 9V1"
            );


        } else {

            currentItem.classList.add("active");

            currentContent.style.maxHeight =
                currentContent.scrollHeight + "px";


            currentPath.setAttribute(
                "d",
                "M1 9H17"
            );

        }

    });

});

// Swiper Initialization
const professionalServiceSwiper = new Swiper(".professional-service-swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    speed: 800,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    }
});

// Card Active Toggle (Using Event Delegation)
document.addEventListener("click", function (event) {
    let btn = event.target.closest(".arrow-btn");
    if (!btn) return; // 

    let card = btn.closest(".service-card");
    if (card) {
        card.classList.toggle("active");
    }
});

// mobile user nvbar reponsive

  const mobileUserDropdownBtn = document.getElementById(
    "mobileUserDropdownBtn"
  );

  const mobileUserMegaMenu = document.getElementById(
    "mobileUserMegaMenu"
  );

  const mobileTriggerLogoutBtn = document.getElementById(
    "mobileTriggerLogoutBtn"
  );

  // Open / Close User Menu
  mobileUserDropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    const isHidden = mobileUserMegaMenu.classList.toggle("hidden");

    mobileUserDropdownBtn.setAttribute(
      "aria-expanded",
      String(!isHidden)
    );
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !mobileUserMegaMenu.contains(e.target) &&
      !mobileUserDropdownBtn.contains(e.target)
    ) {
      mobileUserMegaMenu.classList.add("hidden");

      mobileUserDropdownBtn.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });

  // Logout
  mobileTriggerLogoutBtn.addEventListener("click", function (e) {
    e.preventDefault();

    mobileUserMegaMenu.classList.add("hidden");

    mobileUserDropdownBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    const logoutDialog = document.getElementById("logoutDialog");

    if (logoutDialog) {
      logoutDialog.classList.remove("modal-hidden");
      document.body.style.overflow = "hidden";
    }
  });