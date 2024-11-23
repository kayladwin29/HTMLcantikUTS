function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds}`; //menampilkan clock widget dalam satuan jem, menit, dan detik
}
//update jam agar terus jalan setiap detik
setInterval(updateClock, 1000);

//javascript untuk fitur ReadMore pada page artikel
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; //menampilan secara keseluruhan artikel
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; //menyembunyikan kembali artikel yang tampil seluruhnya
    moreText.style.display = "inline";
  }
}
