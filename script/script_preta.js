let btnBlack = document.getElementById('btn-preta')
let btnClean = document.getElementById('btn-limpar')

let divCards = document.getElementById('cartas')


//Cria array com todas as imagens
function criaAarray() {
        
    let array = []

    for (let i = 0; i <= 99; i++) {
        array.push(`../images/pretas/preta (${i}).jpg`)
    }

    return array
}

let novoArray =  criaAarray()

//Adiciona a carta
let image = document.createElement("img");

function addBlack() {

        divCards.innerHTML = ""
        const random = Math.floor(Math.random() * 99) + 1;

        image.setAttribute("src", novoArray[random-1]);
        image.setAttribute("onclick", "deleteImage(this)");
        
        divCards.appendChild(image)

}

// function removeCard(){

//     let valorSrc = image.getAttribute('src')
//     let matches = valorSrc.match(/(\d+)/);
      
//     if (matches) {

//         let convertMatches = matches.map(Number);
//         let numero = convertMatches[0] + 1
//         novoArray.splice(numero, 1)

//         console.log(novoArray[numero] + numero + matches[0])
//     }

//     console.log(novoArray)
// }

btnBlack.addEventListener('click', addBlack)
//btnBlack.addEventListener('click', removeCard)