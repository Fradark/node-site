const criaUsuario = (nome, idade) => {
    
    let usuario = {
        nome,
        idade
    }
    
    return usuario
}

let Jonas = criaUsuario('Jonas', 29)

Jonas.idade = 22

console.log(Jonas)