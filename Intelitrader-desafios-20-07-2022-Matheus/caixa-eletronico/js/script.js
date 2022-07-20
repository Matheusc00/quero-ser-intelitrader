let valor = prompt("Digite o valor a ser sacado")

let resto = Number(valor)

while(resto >= 100) {
    document.write('<img src="img/100.jpg">')
    resto = resto - 100
}

while(resto >= 50) {
    document.write('<img src="img/50.jpg">')
    resto = resto - 50
}

while(resto >= 20) {
    document.write('<img src="img/20.jpg">')
    resto = resto - 20
}

while(resto >= 10) {
    document.write('<img src="img/10.jpg">')
    resto = resto - 10
}

while(resto >= 5) {
    document.write('<img src="img/5.jpg">')
    resto = resto - 5
}

while(resto >= 2) {
    document.write('<img src="img/2.jpg">')
    resto = resto - 2
}
