const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "Portfolio visitor";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent("Portfolio enquiry from " + name);
    const body = encodeURIComponent(message + "\n\nFrom: " + name + "\nEmail: " + email);
    window.location.href = "mailto:tadiwanashe@example.com?subject=" + subject + "&body=" + body;
  });
}
