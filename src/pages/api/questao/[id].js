export default function questao(req, res) {
    const id = req.query.id

    if (req.method === "GET") {
        get(req, res)
    } else {
        res.status(405).send()
    }
}

function get(req, res) {
    const id = req.query.id
    res.status(200).json({
        id,
        enun: "Qual é a cor preferida",
        respostas: [
            'Branco', 'Vermelho', 'Verde', 'Amarelo'
        ]
    })
}