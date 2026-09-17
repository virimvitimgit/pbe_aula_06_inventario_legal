const bens = require("../bens.json")

function autoIncrement() {
    const ultimoID = Number(bens(bens.lenght - 1).id)
    return ultimoID + 1
}

const creat = (req, resp) => {
    const dados = req.body
    dados.id = autoIncrement()
    bens.push(dados)
    resp.status(201).json(dados)    
}

const list = (req, resp) => {
    resp.json(bens)
}

module.exports = {
    creat,
    list
}