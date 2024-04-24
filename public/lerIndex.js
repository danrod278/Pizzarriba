document.getElementById("cpf").addEventListener('input', callAPI)

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

/**/

function callAPI() {
    const divPedidos = document.getElementById("pedidosbydb");
   
    var cpfInput = document.getElementById("cpf").value;    
    divPedidos.innerHTML = "";    
    if (cpfInput) {
        const dados = { cpfInput };
        fetch('/verifyPedidos', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        }).then(async (response) => response.json())
          .then(async (data) => {
              console.log(data);
              if (data.length > 0) {
                  const obj = JSON.parse(data)[0].cpf;
                  mostrarPedidos(data);
                  addValorInput(obj);
              }
          });
        }
}

function mostrarPedidos(data){
    const objeto = JSON.parse(data)
    const divPedidos = document.getElementById("pedidosbydb")
    const visor = document.getElementById("visor")

    for(i=0;i<objeto.length;i++){

        //arrayPedidos.push(new ConsruirDiv(objeto[i].nome_pizza, objeto[i].borda, objeto[i].tamanho))

        var novoElemento = document.createElement("div")
        novoElemento.id = `elemento${i}`
        novoElemento.classList.add("pedidos")

        //novoElemento.addEventListener("click", click(novoElemento.id))

        var titulo = document.createElement("h1")
        titulo.innerText = objeto[i].nome_pizza
        novoElemento.appendChild(titulo)
        
        var borda = document.createElement('p')
        borda.innerText = objeto[i].borda
        novoElemento.appendChild(borda)

        var tamanho = document.createElement('p')
        tamanho.innerText = objeto[i].tamanho
        novoElemento.appendChild(tamanho)
        /**/
        
        divPedidos.appendChild(novoElemento)
    }
}

function addValorInput(cpf){
    //console.log(JSON.stringify({cpf}))

    fetch("/carregaCliente", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({cpf})
    }).then(async (response)=>response.json()).then(async (dataUsuario)=>{
        
        if(dataUsuario!=undefined || dataUsuario){
            try{
                const objetoUsuario = dataUsuario.dataUsuario
                console.log(objetoUsuario.nome)
    
                var nomeInput = document.getElementById("nome")
                var enderecoInput = document.getElementById("endereco")
                var telefoneInput = document.getElementById("telefone")
                
                nomeInput.value = objetoUsuario.nome
                enderecoInput.value = objetoUsuario.endereco
                telefoneInput.value = objetoUsuario.telefone/**/
            }catch(err){
                console.log("Houve um erro ao apresentar os dados do usuarios no Input (lerInput): "+err)
            }
        }
        
        
    }).catch(err=>{
        console.log("Houve um erro ao tentar puxar os dados do usuario (lerIndex): "+err)
    })

    
}

