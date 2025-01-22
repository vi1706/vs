 // Popup Logic
const popup = document.getElementById("popup");

function openPopup() {
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}

// Form Submission
document.getElementById("consultation-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Send Email (EmailJS or backend integration)
    alert("Thank you! We will contact you shortly.");
    closePopup();
});