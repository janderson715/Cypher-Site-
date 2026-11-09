/* Contact form: sends through the site-forms Worker (Resend) without leaving the page.
   The receiving address is the data-email attribute on <form id="contact-form">
   in contact.html. Without JavaScript the form posts normally to the address
   in its action attribute, so keep both the same. */
(function () {
  "use strict";
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (!form || !window.fetch || !window.FormData) return;
  var email = (form.getAttribute("data-email") || "").trim();
  if (email) form.action = "https://site-forms.janderson-6f5.workers.dev";

  // When the page finished rendering. The Worker rejects anything sent in under 3 seconds.
  var stamp = form.querySelector('[name="_t"]');
  if (stamp) stamp.value = String(Date.now());

  function thanks() {
    form.innerHTML = '<div class="sent" tabindex="-1"><h2 style="font-size:1.5rem;margin-bottom:.4rem">Thank you. Your message was sent.</h2>' +
      "<p>We will reply by email. For anything urgent, call (571) 206-1401.</p></div>";
    form.querySelector(".sent").focus();
  }
  // Coming back from the no-JavaScript route (FormSubmit sends people to ?sent=1)
  if (/[?&]sent=1/.test(location.search)) { thanks(); return; }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.querySelector('[name="_honey"]').value) return;          // a bot filled the hidden field
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; status.className = "status"; status.textContent = "Sending...";
    fetch("https://site-forms.janderson-6f5.workers.dev", {
      method: "POST", headers: { Accept: "application/json" }, body: new FormData(form)
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (res.ok && (res.j.success === true || res.j.success === "true")) { thanks(); return; }
        throw new Error((res.j && res.j.message) || "not sent");
      })
      .catch(function () {
        // The Turnstile token is single-use and expires after about 5 minutes. Without this
        // reset a second attempt resends the spent token and can never succeed.
        try { if (window.turnstile) window.turnstile.reset(); } catch (err) {}
        btn.disabled = false; status.className = "status err";
        status.textContent = "Sorry, the message did not send. Please tick the box again and retry, or email " + email + " directly.";
      });
  });
})();
