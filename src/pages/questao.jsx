import { useState, useEffect } from "react"

export default function Questao() {
    let initialState = null
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [questao, setQuestao] = useState(initialState)

    useEffect(() => {
        
        fetch('http://localhost:3000/api/questao/1')
            .then(value => value.json())
            .then(json => setQuestao(json))
    }, [])

    function renderResposta() {
        return questao?.respostas.map((resp, i) => {
            return <li key={i}>{resp}</li>
        })
    }
    return (
        <div>
            <h1>Questão</h1>
            <span>{questao?.id} - {questao?.enun}</span>
            <div>
                <ul>
                    {renderResposta()}
                </ul>
            </div>
        </div>
    )
}