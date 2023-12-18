
const wrapper = document.querySelector('.wrapper')
const sepet = document.querySelector('.sepet')
const butonlar = document.querySelectorAll('.but')

butonlar.forEach(buton =>{
    buton.addEventListener('click',function(){
    let card = this.parentElement.parentElement
    let resim = card.querySelector('.resim').src
    let marka = card.querySelector('.marka').textContent
    let detay = card.querySelector('.detay').textContent
    let fiyat = card.querySelector('.fiyat').textContent
    console.log(resim,marka,detay,fiyat)
    const div = document.createElement('div')
    div.innerHTML = 
    `
    <div class="card d-flex flex-row justify-content-around w-100 h-50 mb-2 mt-2 inner-kapsayici" >
    <div class ="img-kapsayici">
    <img src="${resim}" class="card-img-top " >
    </div>
    <div class="card-body d-flex gap-3 diger-kapsayici">
      <h5 class="card-title marka">${marka}</h5>
      <p class="card-text detay">${detay}</p>
      <p class="card-text fiyat">${fiyat}</p>
      <button href="#" class="but btn btn-danger h-50 sil ">sil</button>
    </div>
  </div>
    `
        sepet.append(div)
        wrapper.append(sepet)

        const del = document.querySelectorAll('.sil')
        del.forEach(sil =>{
            sil.addEventListener('click',function(){
            let kaldir = this.parentElement.parentElement
            kaldir.remove()
            })
        })
    })
})

