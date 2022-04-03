let btnWhite = document.getElementById('btn-brancas')
let btnClean = document.getElementById('btn-limpar')
let btnSwap = document.getElementById('troca')

let divCards = document.getElementById('cartas')

function addWhite() {
    
    divCards.innerHTML = ""
    for (let i = 1; i <= 6; i++) {
        const random = Math.floor(Math.random() * 299) + 1;

        var image = document.createElement("img");

        image.setAttribute("src", `../images/brancas/branca (${random}).jpg`);
        image.setAttribute("onclick", "deleteImage(this)");
        
        divCards.appendChild(image)
        
    }
    
}

function deleteImage(el) {
    let element = el
    element.remove();
}

function swapImages() {
    let firstImage = divCards.firstElementChild
    divCards.firstElementChild.remove()
    divCards.appendChild(firstImage)
}

btnWhite.addEventListener('click', addWhite)
btnClean.addEventListener('click', () => {
    divCards.innerHTML = ""
})
btnSwap.addEventListener('click', swapImages)





