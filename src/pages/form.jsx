import { useState } from "react"

export default function form(req, res) {
    
    const [name, setName] = useState("")
    const [year, setYear] = useState(0)
    const [usuarios, setUsuarios] = useState([])
    
    async function enviarForm() {
        await fetch('/api/form', {
            method: "POST",
            body: JSON.stringify({name, year})
        })
        
        setName('')
        setYear(0)

        const resp = await fetch('/api/form')
        const usuarios = await resp.json()
        setUsuarios(usuarios)
    }

    function renderUsuarios() {
        return usuarios.map((usuario, i) => {
            return <li key={i}>{usuario.name} tem {usuario.year} anos</li>
        })
    }
    return (
        <div>
            <h1>Integrando API</h1>
            <input type="text" value={name} 
                onChange={e => setName(e.target.value)}/>
            <input type="number" value={year} 
                onChange={e => setYear(+e.target.value)}/>
                <button onClick={enviarForm} >Enviar</button>

                <ul>
                    {renderUsuarios()}
                </ul>
        </div>
    )
}