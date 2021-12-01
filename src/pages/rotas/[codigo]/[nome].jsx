import { useRouter } from "next/router"
import Link from "next/link"

export default function Nome() {
    const router = useRouter();
    const cod = router.query.codigo
    const nome = router.query.nome
    
    return (
        <div>
            <h1>rota / {cod} / {nome}</h1>
            <Link href="/rotas" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}