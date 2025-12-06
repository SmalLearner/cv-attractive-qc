// Analyse de CV (logique à ajouter plus tard)
document.getElementById("cvFile").addEventListener("change", function(){
    document.getElementById("result").innerHTML = "Analyse en cours...";
});

// Analyse du profil textuel
document.getElementById("analyserProfil").addEventListener("click", function(){
    const profil = document.getElementById("profil").value;
    
    if(profil.trim() === ""){
        document.getElementById("profilResult").innerHTML = "Merci d’écrire un profil.";
        return;
    }

    document.getElementById("profilResult").innerHTML = 
        "Analyse IA : Ton profil démontre de bonnes compétences. (Version simplifiée)";
});