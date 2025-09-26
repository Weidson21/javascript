document.getElementById('botao').addEventListener('click', contar)
function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro] Faltam dados!')
    } else {
       res.innerHTML = 'Contando:'
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

        for(let c = 1; c <= f; c +=p){
            res.innerHTML += ` ${c}`
        }
    }
}
