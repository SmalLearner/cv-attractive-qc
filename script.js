// Upload CV
document.querySelector(".upload-area").onclick = () => {
    document.getElementById("cvFile").click();
};

// Profil IA
document.getElementById("analyserProfil").onclick = () => {
    let text = document.getElementById("profil").value;

    if (text.length < 10) {
        document.getElementById("profilResult").innerHTML = "Merci de décrire ton profil.";
        return;
    }

    document.getElementById("profilResult").innerHTML =
        "<p><strong>Analyse IA :</strong> Ton profil présente un fort potentiel pour un emploi administratif ou en service client.</p>";
};
// --- SLIDER HERO INTERACTIF ---

let heroIndex = 0;
const heroSlides = document.querySelectorAll(".hero-slide-link");
const heroDots = document.querySelectorAll(".hero-dot");

function updateHeroSlider() {
    const slider = document.querySelector(".hero-slider");
    slider.style.transform = `translateX(-${heroIndex * 100}%)`;

    heroDots.forEach(dot => dot.classList.remove("active"));
    heroDots[heroIndex].classList.add("active");
}

// Auto défilement
setInterval(() => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    updateHeroSlider();
}, 4000);

// Dots (clic)
heroDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        heroIndex = index;
        updateHeroSlider();
    });
});

