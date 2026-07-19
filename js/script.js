
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