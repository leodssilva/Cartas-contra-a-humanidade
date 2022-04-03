let btnBlack = document.getElementById('btn-preta')
let btnClean = document.getElementById('btn-limpar')

let divCards = document.getElementById('cartas')

function addBlack() {

        divCards.innerHTML = ""
        const random = Math.floor(Math.random() * 99) + 1;

        var image = document.createElement("img");

        image.setAttribute("src", `../images/pretas/preta (${random}).jpg`);
        image.setAttribute("onclick", "deleteImage(this)");
        
        divCards.appendChild(image)
    
}

function deleteImage(el) {
    let element = el
    element.remove();
}

btnBlack.addEventListener('click', addBlack)