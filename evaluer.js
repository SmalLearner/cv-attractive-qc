const uploadZone = document.getElementById("uploadZone");
const cvFile = document.getElementById("cvFile");
const fileChip = document.getElementById("fileChip");
const fileName = document.getElementById("fileName");
const removeFile = document.getElementById("removeFile");

const analyzeBtn = document.getElementById("analyzeBtn");
const resetBtn = document.getElementById("resetBtn");

const progressWrap = document.getElementById("progressWrap");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const results = document.getElementById("results");
const goodList = document.getElementById("goodList");
const badList = document.getElementById("badList");

const scoreRing = document.getElementById("scoreRing");
const scoreNumber = document.getElementById("scoreNumber");

let selectedFile = null;

function setRing(score) {
  const deg = Math.round((score / 100) * 360);
  let color = "#2e7d32"; // green
  if (score < 60) color = "#e53935";
  else if (score < 80) color = "#fb8c00";

  scoreRing.style.background = `conic-gradient(${color} 0deg, ${color} ${deg}deg, #e0e0e0 ${deg}deg, #e0e0e0 360deg)`;
  scoreNumber.textContent = score;
}

function setDemoResult(score) {
  // exemples (tu remplaceras plus tard par tes règles Québec)
  const good = [
    "Structure claire et facile à lire",
    "Sections principales présentes (expérience, compétences)",
    "Informations de contact visibles"
  ];

  const bad = score < 60 ? [
    "Profil professionnel trop vague (3–4 lignes max recommandées)",
    "Manque de résultats mesurables (chiffres, impacts)",
    "Mots-clés du poste absents (ATS)"
  ] : score < 80 ? [
    "Certaines expériences manquent de verbes d’action",
    "Compétences techniques à préciser (outils, technologies)",
    "Optimiser la clarté des réalisations"
  ] : [
    "Ajouter 1–2 résultats chiffrés supplémentaires",
    "Vérifier la cohérence des dates et des titres",
    "Peaufiner la section compétences (prioriser l’essentiel)"
  ];

  goodList.innerHTML = good.map(x => `<li>${x}</li>`).join("");
  badList.innerHTML = bad.map(x => `<li>${x}</li>`).join("");
}

uploadZone.addEventListener("click", () => cvFile.click());

uploadZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadZone.style.borderColor = "rgba(31,74,51,0.75)";
});

uploadZone.addEventListener("dragleave", () => {
  uploadZone.style.borderColor = "rgba(31,74,51,0.35)";
});

uploadZone.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadZone.style.borderColor = "rgba(31,74,51,0.35)";
  const f = e.dataTransfer.files?.[0];
  if (f) handleFile(f);
});

cvFile.addEventListener("change", () => {
  const f = cvFile.files?.[0];
  if (f) handleFile(f);
});

function handleFile(f) {
  const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const maxSize = 5 * 1024 * 1024;

  if (!allowed.includes(f.type)) {
    alert("Format non supporté. Utilise PDF, DOC ou DOCX.");
    cvFile.value = "";
    return;
  }
  if (f.size > maxSize) {
    alert("Fichier trop lourd. Taille max : 5 Mo.");
    cvFile.value = "";
    return;
  }

  selectedFile = f;
  fileName.textContent = f.name;
  fileChip.style.display = "flex";
  analyzeBtn.disabled = false;
  resetBtn.disabled = false;
}

removeFile.addEventListener("click", (e) => {
  e.stopPropagation();
  resetAll();
});

resetBtn.addEventListener("click", () => resetAll());

function resetAll() {
  selectedFile = null;
  cvFile.value = "";
  fileChip.style.display = "none";
  analyzeBtn.disabled = true;
  resetBtn.disabled = true;
  progressWrap.style.display = "none";
  results.style.display = "none";
  scoreNumber.textContent = "--";
  scoreRing.style.background = "conic-gradient(#e0e0e0 0deg, #e0e0e0 360deg)";
  progressFill.style.width = "0%";
}

analyzeBtn.addEventListener("click", async () => {
  if (!selectedFile) return;

  progressWrap.style.display = "block";
  results.style.display = "none";
  progressFill.style.width = "0%";
  progressText.textContent = "Analyse en cours…";

  // Simulation d’analyse (UI belle). Remplacera plus tard par règles/IA.
  let p = 0;
  const timer = setInterval(() => {
    p += Math.floor(Math.random() * 12) + 6;
    if (p >= 100) p = 100;
    progressFill.style.width = p + "%";

    if (p < 35) progressText.textContent = "Lecture du document…";
    else if (p < 70) progressText.textContent = "Vérification ATS + structure…";
    else if (p < 95) progressText.textContent = "Analyse des sections (Québec)…";
    else progressText.textContent = "Finalisation…";

    if (p === 100) {
      clearInterval(timer);

      // Score démo (tu brancheras tes règles après)
      const score = 82; // change ici si tu veux tester
      setRing(score);
      setDemoResult(score);

      results.style.display = "block";
      progressText.textContent = "Analyse terminée ✅";
    }
  }, 220);
});
