import { useRouter } from "next/router"
import Link from "next/link"

export default function params() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const name = router.query.nome
    const id = router.query.id

    return (
        <div>
            <h1>Rotas Params: Name {name} e Id {id}</h1>
            <Link href="/rotas">
            <button>Voltar</button>
            </Link>
        </div>
    )
}