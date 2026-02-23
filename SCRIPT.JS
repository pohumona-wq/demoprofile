// Page Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 800);
});

// Fade-in on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Magnetic Button Effect
const magneticButtons = document.querySelectorAll(".magnetic");

magneticButtons.forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
    });
});