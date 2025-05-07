// 1. Event Handling

// Button click event
document.getElementById("myButton").addEventListener("click", function() {
    this.innerHTML = "Clicked!";
    this.style.backgroundColor = "blue";
});

// Hover effects
document.getElementById("myButton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});

document.getElementById("myButton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

// Keypress detection
document.addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
});

// Double click or long press detection
let pressTimer;
document.getElementById("myButton").addEventListener("mousedown", function() {
    pressTimer = setTimeout(function() {
        alert("Long press detected!");
    }, 1000); // 1 second
});

document.getElementById("myButton").addEventListener("mouseup", function() {
    clearTimeout(pressTimer);
});

// 2. Interactive Elements

// Image Gallery
let images = ["pst.png", "rea.jpeg", "small.jpeg"];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("image").src = images[currentImageIndex];
}

document.getElementById("nextButton").addEventListener("click", changeImage);

// Tabs/Accordion functionality
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function() {
        let content = document.getElementById(tab.getAttribute("data-target"));
        content.style.display = content.style.display === "none" ? "block" : "none";
    });
});

// 3. Form Validation 📋✅

// Required field check
document.getElementById("myForm").addEventListener("submit", function(event) {
    const nameField = document.getElementById("name");
    if (nameField.value.trim() === "") {
        event.preventDefault();
        alert("Name is required!");
    }
});

// Email format validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    const emailField = document.getElementById("email");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailField.value)) {
        event.preventDefault();
        alert("Please enter a valid email address!");
    }
});

// Password rule validation (min 8 characters)
document.getElementById("myForm").addEventListener("submit", function(event) {
    const passwordField = document.getElementById("password");
    if (passwordField.value.length < 8) {
        event.preventDefault();
        alert("Password must be at least 8 characters long!");
    }
});

// Real-time feedback while typing
document.getElementById("password").addEventListener("input", function() {
    const feedback = document.getElementById("passwordFeedback");
    if (this.value.length < 8) {
        feedback.textContent = "Password too short!";
    } else {
        feedback.textContent = "Password is strong!";
    }
});
