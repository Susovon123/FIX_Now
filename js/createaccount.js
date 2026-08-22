document.addEventListener("DOMContentLoaded", function () {

    const createAccountBtn =
        document.getElementById("createAccountBtn");

    const createAccountModal =
        document.getElementById("createAccountModal");

    const closeCreateAccountModal =
        document.getElementById("closeCreateAccountModal");

    const signupModal =
        document.getElementById("signupModal");


    // ==============================
    // CREATE ACCOUNT BUTTON
    // ==============================

    if (createAccountBtn && createAccountModal) {

        createAccountBtn.addEventListener("click", function () {

            // Sign Up Modal close
            if (signupModal) {
                signupModal.classList.add("hidden");
            }

            // Create Account Modal open
            createAccountModal.classList.remove("hidden");

            // Background freeze
            document.body.classList.add("overflow-hidden");
            document.documentElement.classList.add("overflow-hidden");

        });

    }


    // ==============================
    // CLOSE BUTTON
    // ==============================

    if (closeCreateAccountModal && createAccountModal) {

        closeCreateAccountModal.addEventListener("click", function () {

            createAccountModal.classList.add("hidden");

            // Background unfreeze
            document.body.classList.remove("overflow-hidden");
            document.documentElement.classList.remove("overflow-hidden");

        });

    }


    // ==============================
    // OUTSIDE CLICK
    // ==============================

    if (createAccountModal) {

        createAccountModal.addEventListener("click", function (event) {

            if (event.target === createAccountModal) {

                createAccountModal.classList.add("hidden");

                // Background unfreeze
                document.body.classList.remove("overflow-hidden");
                document.documentElement.classList.remove("overflow-hidden");

            }

        });

    }

});