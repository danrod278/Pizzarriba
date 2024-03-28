document.getElementById("cpf").addEventListener('input', callAPI)


function callAPI(){
    const divPedidos = document.getElementById("pedidosbydb")
    divPedidos.innerHTML=""
    var cpfInput = document.getElementById("cpf").value    
    if(cpfInput){
        const dados = {cpfInput}
        fetch('/verifyPedidos', {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(dados)
        }
        ).then(async (response) => response.json()).then(async (data)=>{
            console.log(data)
            if(data!=[]){
                const obj = ((JSON.parse(data))[0].cpf)
                
                mostrarPedidos(data)

                addValorInput(obj)
            }
            return
            

        })
    }
    

}

function mostrarPedidos(data){
    const objeto = JSON.parse(data)
    const divPedidos = document.getElementById("pedidosbydb")
    const visor = document.getElementById("visor")
    //visor.innerText = objeto[0].id
    for(i=0;i<objeto.length;i++){

        var novoElemento = document.createElement("div")
        novoElemento.classList.add("pedidos")

        var titulo = document.createElement("h1")
        titulo.innerText = objeto[i].nome_pizza
        novoElemento.insertBefore(titulo, novoElemento.children[0])
        
        var borda = document.createElement('p')
        borda.innerText = objeto[i].borda
        novoElemento.insertBefore(borda, novoElemento.children[1])

        var tamanho = document.createElement('p')
        tamanho.innerText = objeto[i].tamanho
        novoElemento.insertBefore(tamanho, novoElemento.children[2])
        
        divPedidos.insertBefore(novoElemento, divPedidos.children[i])
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
