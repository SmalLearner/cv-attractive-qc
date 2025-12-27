console.log("evaluer.js chargé");

document.addEventListener("DOMContentLoaded", () => {

  const uploadZone = document.getElementById("uploadZone");
  const fileInput = document.getElementById("cvFile");
  const fileNameSpan = document.getElementById("fileName");
  const fileChip = document.getElementById("fileChip");
  const removeFileBtn = document.getElementById("removeFile");

  uploadZone.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length) {
      fileNameSpan.textContent = fileInput.files[0].name;
      fileChip.style.display = "inline-flex";
    }
  });

  removeFileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    fileInput.value = "";
    fileChip.style.display = "none";
  });

  const analyzeBtn = document.getElementById("analyzeBtn");
  const progressWrap = document.getElementById("progressWrap");
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");

  const resultsSection = document.getElementById("results");
  const goodList = document.getElementById("goodList");
  const badList = document.getElementById("badList");

  const improveBtn = document.getElementById("improveBtn");
  const templateBtn = document.getElementById("templateBtn");

  analyzeBtn.addEventListener("click", () => {
    if (!fileInput.files.length) {
      alert("Veuillez téléverser votre CV d'abord.");
      return;
    }

    progressWrap.style.display = "block";
    progressFill.style.width = "0%";
    resultsSection.style.display = "none";

    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;
      progressFill.style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);
        showFakeResults();
      }
    }, 250);
  });

  function showFakeResults() {
    progressText.innerText = "Analyse terminée ✔";

    goodList.innerHTML = "";
    badList.innerHTML = "";

    const goodPoints = [
      "Structure claire et professionnelle",
      "Sections principales bien organisées",
      "Informations de contact visibles"
    ];

    const badPoints = [
      "Ajouter des résultats chiffrés",
      "Clarifier certains titres de poste",
      "Optimiser les mots-clés pour l'ATS"
    ];

    goodPoints.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      goodList.appendChild(li);
    });

    badPoints.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      badList.appendChild(li);
    });

    resultsSection.style.display = "block";
    improveBtn.style.display = "inline-block";
    templateBtn.style.display = "inline-block";
  }

});
