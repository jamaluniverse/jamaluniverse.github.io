console.log('Selamat Datang di Mode Pengembang');
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener("copy", (evt) => {
    evt.clipboardData.setData("text/plain", "menyalin tidak diperkenankan pada wesbite saya");
    evt.preventDefault();
    }, false);

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
