document.getElementById('tabuada').addEventListener('click', calcular)

function calcular(){
    var valor = document.getElementById('xtab')
    var tab = document.getElementById('seltabuada')
    if (valor.value.lenght == 0) {
        window.alert('Por favor digite um número')
    } else {
        var numero = Number(valor.value)
        var c = 1
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            tab.appendChild(item)
        }
    }
}