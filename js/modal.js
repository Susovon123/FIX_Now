// professional services modal starts

const dialog = document.getElementById("myDialog");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

if (dialog && openModal && closeModal) {

    openModal.addEventListener("click", () => {
        dialog.showModal();
        document.body.style.overflow = "hidden";
    });

    closeModal.addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("click", (e) => {
        const rect = dialog.getBoundingClientRect();

        const inside =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

        if (!inside) {
            dialog.close();
        }
    });

    dialog.addEventListener("close", () => {
        document.body.style.overflow = "";
    });

}

// booking details modal js 


const providerModal = document.getElementById("providerModal");
const openProviderModal = document.getElementById("openProviderModal");
const closeProviderModal = document.getElementById("closeProviderModal");

if (providerModal && openProviderModal && closeProviderModal) {

    // Open Modal
    openProviderModal.addEventListener("click", () => {
        providerModal.showModal();
        document.body.style.overflow = "hidden";
    });

    // Close Button
    closeProviderModal.addEventListener("click", () => {
        providerModal.close();
        document.body.style.overflow = "";
    });

    // Outside Click
    providerModal.addEventListener("click", (e) => {
        const rect = providerModal.getBoundingClientRect();

        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            providerModal.close();
            document.body.style.overflow = "";
        }
    });

}