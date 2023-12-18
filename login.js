const id = document.getElementById("kullanicikayit")
const pass = document.getElementById("kullanicipass")
const btnUye = document.getElementById("btn-uye")
const idgiris = document.getElementById("kullanicigiris")
const passGiris = document.getElementById("kullanicipassgiris")
const btnGiris = document.getElementById("btn-giris")

function sayfaAcilinca(){
  let kayit = JSON.parse(localStorage.getItem("kullanici"))
  if(!kayit){
    localStorage.setItem("kullanici","[]")
  }
}
sayfaAcilinca()

btnUye.addEventListener('click',function(){
    let kayit = JSON.parse(localStorage.getItem("kullanici"))
    if(id.value.trim() != "" && pass.value.trim() != ""){
        let kullanici = {
            isim:id.value,
            sifre:pass.value
        }
        kayit.push(kullanici)
        localStorage.setItem("kullanici",JSON.stringify(kayit))
        btnUye.textContent = "Kayit Başarılı"
    }
    
})

btnGiris.addEventListener("click",function(){
    let kayit = JSON.parse(localStorage.getItem("kullanici"))
    let eslesme = kayit.filter(uye => uye.isim == idgiris.value && uye.sifre == passGiris.value)
    if(eslesme.length != 0){
        console.log("giris basarılı")
    }else{
        console.log("giris basarısız")
    }
})




function toggleForm() {
    let loginForm = document.getElementById('login-form');
    let signupForm = document.getElementById('signup-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}