// // service stacking animation

// const cards = document.querySelectorAll("[data-card]");

// function stackCards() {

//     cards.forEach((card, index) => {

//         const rect = card.getBoundingClientRect();

//         const trigger = 150;

//         if (rect.top <= trigger) {

//             const offset = (trigger - rect.top) * 0.15;

//             card.style.transform = `translateY(-${offset}px)`;

//         } else {

//             card.style.transform = "translateY(0px)";
//         }

//     });

// }

// window.addEventListener("scroll", stackCards);
// window.addEventListener("load", stackCards);

// Estimated Value Query Dropdown


const serviceDropdownBtn = document.getElementById("serviceDropdownBtn");
const serviceDropdown = document.getElementById("serviceDropdown");
const selectedService = document.getElementById("selectedService");

// Dropdown open / close
serviceDropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    serviceDropdown.classList.toggle("hidden");
});

// Service select
function selectService(serviceName) {
    selectedService.textContent = serviceName;
    serviceDropdown.classList.add("hidden");
}

// Outside click = close dropdown
document.addEventListener("click", function () {
    serviceDropdown.classList.add("hidden");
});