let inputText = document.querySelector("#txtYapilacaklar");
let btnEkle = document.querySelector("#btnEkle");

let listEkle = document.querySelector("#listeYapilacaklar");
let listTamam = document.querySelector("#listeTamamlananlar");

let btnTamamla; //img tıklandıgında tamamlananlar kısmına geçmesi için.

function listeyeEkle() {
  let inputValue = inputText.value;
  console.log(inputValue);
  if (inputValue == "") {
    alert("Lütfen bir veri giriniz.");
  } else {
    let liEkle = document.createElement("li");
    listEkle.appendChild(liEkle);
    liEkle.innerHTML = inputValue;

    btnTamamla = document.createElement("img");
    liEkle.appendChild(btnTamamla);
    btnTamamla.setAttribute("src", "img/tamam.png");
    btnTamamla.setAttribute("id", "resimTamamla");

    // btnTamamla.setAttribute("onclick","tamamla()") bu bad yöntem
    btnTamamla.addEventListener("click", tamamla);

    let btnSil = document.createElement("img");
    liEkle.appendChild(btnSil);
    btnSil.setAttribute("src", "img/sil.png");
    btnSil.setAttribute("id", "resimSil");
    btnSil.addEventListener("click", sil);

    function sil() {
      liEkle.remove();
      document.getElementById("sonuc").innerHTML = "Seçiminiz silindi!";
    }
    function tamamla() {
      let liEkle = document.createElement("li");
      listTamam.appendChild(liEkle);
      liEkle.innerHTML = inputValue;
      listTamam.appendChild(btnSil);
      sil();
      document.getElementById("sonuc").innerHTML = "Seçiminiz taşındı!";
      btnSil.addEventListener("click", tamamlaSil);
      function tamamlaSil() {
        liEkle.remove();
        btnSil.remove();
      }
    }
  }
}
