const stripe = Stripe("pk_test_TA_CLE_PUBLIQUE_STRIPE"); // on la mettra après

document.getElementById("payBtn").addEventListener("click", async () => {
  const response = await fetch("https://ton-backend.vercel.app/create-checkout-session", {
    method: "POST",
  });

  const session = await response.json();
  stripe.redirectToCheckout({ sessionId: session.id });
});
