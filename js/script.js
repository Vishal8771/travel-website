// ===============================
// Booking Button
// ===============================

function showMessage() {
    alert("🎉 Thank you for choosing Travel World!\nBooking feature will be available soon.");
}

// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {

            Swal.fire({
                icon: "warning",
                title: "Oops!",
                text: "Please fill all fields."
            });

            return;
        }

        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you! We will contact you soon.",
            confirmButtonColor: "#007bff",
            confirmButtonText: "OK"
        });

        form.reset();

    });

}

// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 80) {

        nav.style.background = "#111";

    }

    else {

        nav.style.background = "rgba(0,0,0,.45)";

    }

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.display = "none";

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter h1");

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText);

        let count = Number(counter.getAttribute("data-count")) || 0;

        const increment = target / 80;

        if (count < target) {

            count += increment;

            counter.innerText = Math.ceil(count) + "+";

            counter.setAttribute("data-count", count);

            setTimeout(update, 20);

        }

        else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// ===============================
// Welcome Message
// ===============================

window.onload = function () {

    console.log("Welcome To Travel World");

};

// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},2000);

});

// ===========================
// Dark Mode
// ===========================

const themeBtn = document.getElementById("themeToggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀";

}
else{

themeBtn.innerHTML="🌙";

}

});

}