// professional services modal starts

      /* ---------- Modal 1: Services grid ---------- */
      const modal = document.getElementById("myDialog");
      const openModal = document.getElementById("openModal");
      const closeModal = document.getElementById("closeModal");

      openModal.addEventListener("click", () => {
        modal.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
      });

      const hideModal = () => {
        modal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      };

      closeModal.addEventListener("click", hideModal);

      modal.addEventListener("click", (e) => {
        const modalContent = modal.querySelector(".modal-content");
        if (!modalContent.contains(e.target) && e.target !== closeModal) {
          hideModal();
        }
      });

      /* ---------- Modal 2: AC Service Plans (nested) ---------- */
      const acModal = document.getElementById("acServiceModal");
      const openACServiceModal = document.getElementById("openACServiceModal");
      const closeACModal = document.getElementById("closeACModal");
      const servicePagePanel = document.getElementById("servicePage");

      // Clicking the "AC" card inside modal 1 opens modal 2 on top of it
      openACServiceModal.addEventListener("click", () => {
        acModal.classList.remove("hidden");
      });

      // Close button inside the AC plans panel closes modal 2,
      // revealing the services modal underneath again
      closeACModal.addEventListener("click", () => {
        acModal.classList.add("hidden");
      });

      // Clicking the dark backdrop (outside the white panel) also closes modal 2
      acModal.addEventListener("click", (e) => {
        if (!servicePagePanel.contains(e.target) && e.target !== closeACModal) {
          acModal.classList.add("hidden");
        }
      });

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
