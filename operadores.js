// > Maior que 
// < Menor que 
// >= Maior ou igual que
// <= Menor ou igual que
// == Igual a (valor)
// === Igual a (valor e tipo)
// != Diferente de (valor)
// !== Diferente de (valor e tipo)

console.log(10 == "10");
console.log("----------")
console.log(10 === "10");

let botão = null;

console.log(typeof botão);
console.log(18 >= 18);

let perfil = "admin";
let categoria = 1;

if (perfil === "admin") {
    console.log("Você é um administrador.");
}else {
    console.log("Você não é um administrador.");
}

// Condição A         Condição B            A && B
// true                true                 true
// true                false                false
// false               true                 false
// false               false                false  

// // || or 
// Condição A         Condição B            A || B
// true                true                 true
// true                false                true
// false               true                 true
// false               false                false

let ativo = true;

console.log(!ativo);

console.log(!false);