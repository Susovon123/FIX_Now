const openArrivalModal = document.getElementById("openArrivalModal");
const arrivalModal = document.getElementById("arrivalModal");
const closeArrivalModal = document.getElementById("closeArrivalModal");


// OPEN MODAL
openArrivalModal.addEventListener("click", function () {

    arrivalModal.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
});


// CLOSE MODAL
closeArrivalModal.addEventListener("click", function () {

    arrivalModal.classList.add("hidden");

    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
});


// CLICK OUTSIDE MODAL
arrivalModal.addEventListener("click", function (event) {

    if (event.target === arrivalModal) {

        arrivalModal.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");
        document.documentElement.classList.remove("overflow-hidden");
    }
});