import Link from "next/link"
import router from "next/router"

export default function rotas() {

    function buscaSimples(url) {
        router.push(url)
    }

    function buscaParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 12346,
                nome: 'Flavio Santos'
            }
        })
    }

    return (
        <div>
            <h1>Menu </h1>
            <div>
                <Link href="/rotas/params?name=Flavio&id=123" passHref>
                    <li>Param</li>
                </Link>
                <Link href="/rotas/123/buscar" passHref>
                    <li>Busca</li>
                </Link>
                <Link href="/rotas/123/Flavio" passHref>
                    <li>Flavio</li>
                </Link>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <button onClick={() => router.push("/rotas/123/buscar")} >Buscar</button>
                <button onClick={() => buscaSimples("rotas/123/Flavio")} >Flávio</button>
                <button onClick={buscaParams} >Pessoa</button>
            </div>
        </div>
    )
}