
   
    function recommendTrip() {
  const name = document.getElementById("userName").value;
  const destinations = [
    "Paris - Aşkın şehri seni bekliyor!",
    "Bali - Doğayla iç içe bir tatil!",
    "Tokyo - Teknoloji ve gelenek buluşması!",
    "Kapadokya - Balonlarla dolu masalsı bir yolculuk!",
    "New York - Asla uyumayan şehir seni çağırıyor!",
    "Rio de Janeiro - Renkli ve coşkulu bir deneyim!",
    "Cape Town - Okyanusla dağların buluştuğu şehir!"
  ];

  const random = Math.floor(Math.random() * destinations.length);
  const message = `${name}, sana önerimiz: ${destinations[random]}`;

  document.getElementById("result").innerHTML = `<p>${message}</p>`;
}



// URL parametrelerini oku
const params = new URLSearchParams(window.location.search);

// HTML öğelerine yerleştir
document.getElementById("isim").textContent = params.get("isim") || "Yok";
document.getElementById("email").textContent = params.get("email") || "Yok";
document.getElementById("yer").textContent = params.get("yer") || "Yok";
