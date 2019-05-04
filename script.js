const cartas = document.querySelectorAll('.carta')

function embaralhar(){
    cartas.forEach(carta => {
        let numeroAleatorio = Math.floor(Math.random()*12);
        // console.log(numeroAleatorio)
        carta.style.order = numeroAleatorio
    })
}

embaralhar();

cartas.forEach(carta => {
    carta.addEventListener('click', virarCarta)
})

let pontos = 0
let primeiraCarta = null
let segundaCarta = null

function virarCarta(){
    if (primeiraCarta && segundaCarta){
        return
    } else{
        // cartas[0].classList.add('flip')
        this.classList.add('flip')
    }
    
    if (primeiraCarta === null){
        primeiraCarta = this
        console.log('1aCarta',primeiraCarta)
    } else {
        if (segundaCarta!= null){
            return
        }
        
        if (this === primeiraCarta){
            return
        } else {
            segundaCarta = this
            console.log('2aCarta',segundaCarta)
            if (segundaCarta.dataset.framework === primeiraCarta.dataset.framework){
                pontos++
                primeiraCarta = null
                segundaCarta = null
                return
            } else {
                setTimeout(()=>{
                    primeiraCarta.classList.remove('flip')
                    segundaCarta.classList.remove('flip')
                    primeiraCarta = null
                    segundaCarta = null
                },1500)
                
            }
        }
    }
}

// let lista = ['item1', 'item2', 'item3']
// let listaHTML = document.createElement('ul')
// listaHTML.innerHTML = lista.map((elemento)=>{return `<li>${elemento}</li>`}).join(' ')
