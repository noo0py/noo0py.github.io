const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        let confirm = document.getElementById("confirm");

        if (name === "" || email === "" || subject === "" || message === "") {
            confirm.textContent = "Please fill out all fields.";
        } 
        else if (!email.includes("@") || !email.includes(".com")) {
            confirm.textContent = "Please enter a valid email address.";
        } 
        else {
            confirm.textContent = "Thank you for reaching out! Your form has been submitted and will be reviewed by our team within the next 48 hours. ";
            form.reset();
        }
    });
}

const filterButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const category = this.getAttribute("data-category");

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        productCards.forEach(function(product) {
            const productCategory = product.getAttribute("data-category");
            if (category === "all" || category === productCategory) {
                product.classList.remove('hidden');
            } 
            else {
                product.classList.add('hidden');
            }
        });
    });
});
