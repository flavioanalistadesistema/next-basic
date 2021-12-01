export default function Method(req, res) {
    if(req.method === "GET") {
        res.status(200).json({
            nome: "pedro"
        })
    }else {
        res.status(200).json({
            nome: "Maria"
        })
    }
}