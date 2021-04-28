var botao = document.querySelector(".adicionarTarefa")
botao.addEventListener("click", function adicionar() {
    var inputDone = document.createElement("input") //createInput cria o input
    var inputValue = document.querySelector(".primeiroInput").value
    var papel = document.querySelector(".papelzin")
    var labelDone = document.createElement("label") 
    var novoContainer = document.createElement("div")

    novoContainer.setAttribute("class", "container")

    inputDone.setAttribute("type", "checkbox") //setar atributo 

    labelDone.setAttribute("for", "checkbox")
    labelDone.setAttribute("class", "label")
    labelDone.innerHTML = inputValue

    novoContainer.appendChild(inputDone)
    novoContainer.appendChild(labelDone)

    papel.appendChild(novoContainer)
})
