import { useRouter } from "next/router"
import Link from "next/link"

export default function Buscar() {
    const router = useRouter();
    const cod = router.query.codigo
    
    return (
        <div>
            <h1>rota / {cod} / Buscar!!</h1>
            <Link href="/rotas" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}