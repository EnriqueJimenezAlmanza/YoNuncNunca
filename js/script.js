const fraseEl = document.getElementById('frase');
const fraseBtn = document.getElementById('fraseBtn');
const totalFrases = frases.length;
const randomNumber = randomInteger(0, (totalFrases - 1))
const frasesImpresas = document.querySelectorAll('.frase-insertada')


// Frase que se va a mostrar

document.addEventListener('DOMContentLoaded', iniciarApp)
fraseBtn.addEventListener('click', () => {
    limpiarHTML()
    let randomNumber = randomInteger(0, (totalFrases - 1))
    insertarHTML(randomNumber);
})

function iniciarApp() {
    insertarHTML();
}

function insertarHTML(index) {
    const fraseHMTL = document.createElement('P')
    fraseHMTL.textContent = frases[index]
    fraseHMTL.classList.add('frase-insertada')
    fraseEl.appendChild(fraseHMTL)
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function limpiarHTML() {
    // Forma de limpiar elementos html de forma lento
    // contenedorCarrito.innerHTML = "";
    while (fraseEl.firstChild) {
        fraseEl.removeChild(fraseEl.firstChild)
    }
}