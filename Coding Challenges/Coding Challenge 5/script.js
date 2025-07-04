document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const emailInput = document.getElementById("email");
  const passInput = document.getElementById("password");

  const emailErr = document.getElementById("email-error");
  const passErr = document.getElementById("password-error");
  const formErr = document.getElementById("form-error");

  /* utility helpers */
  const showErr = (msgEl, inputEl) => {
    msgEl.classList.remove("hidden");
    inputEl.classList.add("invalid");
  };
  const hideErr = (msgEl, inputEl) => {
    msgEl.classList.add("hidden");
    inputEl.classList.remove("invalid");
  };

  const validateEmail = () => {
    const value = emailInput.value.trim();
    if (!value || !value.includes("@")) {
      showErr(emailErr, emailInput);
      return false;
    }
    hideErr(emailErr, emailInput);
    return true;
  };

  const validatePassword = () => {
    const value = passInput.value;
    if (value.length < 6) {
      showErr(passErr, passInput);
      return false;
    }
    hideErr(passErr, passInput);
    return true;
  };

  /* live feedback while typing */
  emailInput.addEventListener("input", validateEmail);
  passInput.addEventListener("input", validatePassword);

  /* ---- form submission --------------------------------------- */
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // block actual submit for demo

    const emailOk = validateEmail();
    const passOk = validatePassword();

    if (!emailOk || !passOk) {
      formErr.classList.remove("hidden");
      return; // short‑circuit
    }
    formErr.classList.add("hidden");

    // at this point everything's valid – emulate success flow
    console.log("✅ Form submitted!");
    alert("Form submitted! 🔥"); // dev feedback
    form.reset();
  });
});
