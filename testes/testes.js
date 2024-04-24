const div = document.getElementById('div')
div.innerText = "Funcionando"

class ConsruirDiv{
    constructor(sabor, tamanho, borda){
        this.sabor = sabor
        this.tamanho = tamanho 
        this.borda = borda
        this.elemento = this.criarElemento() 
    }
    criarElemento(){
        const div = document.createElement("div")
        
        const saborp = document.createElement("p")
        saborp.innerText = this.sabor
        
        const tamanhop = document.createElement("p")
        tamanhop.innerText = this.tamanho
        
        const bordap = document.createElement("p")
        bordap.innerText = this.borda

        div.appendChild(saborp)
        div.appendChild(tamanhop)
        div.appendChild(bordap)
        return div
    }
    addElemento(pai){
        pai.appendChild(this.elemento)
    }
}

const Elemento = new ConsruirDiv("muzzarella", "grande", "chocolate") 
Elemento.addElemento(div)