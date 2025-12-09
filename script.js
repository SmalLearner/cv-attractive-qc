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
