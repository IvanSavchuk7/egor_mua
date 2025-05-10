document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waitlist-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const submitBtn = document.getElementById("submit-btn");
        submitBtn.disabled = true; //
        const loader = submitBtn.querySelector(".loading");
        const arrowOuter = submitBtn.querySelector(".arrow");
        const checkmark = submitBtn.querySelector(".checkmark");
        arrowOuter.style.opacity = "0";
        submitBtn.style.color = "transparent";
        loader.classList.add("active");

        const formData = new FormData(form);

        fetch("https://script.google.com/macros/s/AKfycbwDA3nVybelWNTy_Is0UXo_ri2ZDu78JZvVuaQYFMJbI2dQQvuV0bAAOnR-pYf7W2aMag/exec", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    const submitBtn = document.getElementById("submit-btn");
                    submitBtn.style.display = "flex";
                    submitBtn.style.alignItems = "center";
                    submitBtn.style.justifyContent = "center";
                    loader.classList.remove("active");
                    checkmark.classList.add("active");
                    setTimeout(() => {
                        window.location.href = "https://t.me/+qMk3jBLEn3M3M2Ji";
                    }, 500);
                    submitBtn.classList.add("submitted");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Something went wrong. Please try again later.");
            });
    });
});
