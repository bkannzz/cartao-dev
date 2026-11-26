a = Number(process.argv[2])
b = Number(process.argv[3])

if (a > b) {
    console.log("O maior valor é o A:", a)
} else if (a < b) {
    console.log("O maior valor é o B:", b)
} else {
    console.log("Os valores são iguais")
}

console.log("A média dos dois valores A e B é:", (a + b) / 2)