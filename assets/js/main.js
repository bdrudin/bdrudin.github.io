const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}

list.forEach((item) => {
  item.addEventListener("click", activeLink);
});

// kontak form
const btnKirim = document.querySelector(".btn-kirim");
const btnLoad = document.querySelector(".btn-loading");
const msgAlert = document.querySelector(".msg-alert");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyNpYRXnozrPhEMuArPgPxeBOLpfdanOUtY0ZEd1qnaOXndi3tx1zPEEK7vWSErF-U4vQ/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //
  btnLoad.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      btnLoad.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      form.reset();
      msgAlert.classList.toggle("d-none");
    })
    .catch(() => console.error("Error!"));
});
