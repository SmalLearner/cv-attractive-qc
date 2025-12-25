function downloadCV() {
  const paid = localStorage.getItem("paid");

  if (!paid) {
    localStorage.setItem("pendingDownload", window.location.pathname);
    window.location.href = "../pricing.html";
    return;
  }

  alert("PDF généré sans filigrane (version premium)");
}
