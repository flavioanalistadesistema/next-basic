import { useState } from "react"

export default function Form(req, res) {
    const [name, setName] = useState('')
    const [year, setYear] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    async function salvarUsuario() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({name, year})
        })
        setName('')
        setYear(0)
        const resp = await fetch('/api/form')
        const usuario = await resp.json()
        setUsuarios(usuario)

    }

    function renderUsuarios() {
        return usuarios.map((user, i) => {
            return <li key={i}>{user.name} tem {user.year} anos</li>
        })
    }

    return (
        <div>
            <h1>Integrando API</h1>
            <input type="text" value={name}
                onChange={e => setName(e.target.value)} />
            <input type="number" value={year}
                onChange={e => setYear(+e.target.value)} />
                <button onClick={salvarUsuario}>Enviar</button>
                <ul>
                    {renderUsuarios()}
                </ul>
        </div>
    )
}