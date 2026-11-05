// smooth scroll for menu links//
document.querySelectorAll("nav a").forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        const targetId=this.getAttribute("href");
        const targetSection=document.querySelector(targetId);
        targetSection.scrollIntoView({behavior:'smooth'});
        });
});

//Active Nav bar link on scroll//
const sections=document.querySelectorAll("section");
const navlinks=document.querySelectorAll("scroll",()=>{
    let current=" ";
    sections.forEach(section=>{
        const sectionTop=section.offsetTop-100;
        const sectionHeight=section.clientHeight;
        if (pageYOffset>=sectionTop && pageYOffset< sectionTop+sectionHeight)
        {
            current=section.getAttribute("id");
        }
    });
    navlinks.forEach(link=>{
        if (link.getAttribute("href")==="#"+current)
        {
            link.classList.add("active");
        }
    });
});

// Contact form validation//

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();


    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email!");
        return;
    }

    alert("Message sent successfully! ✅");

    form.reset();
});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");
topBtn.innerText = "⬆";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});