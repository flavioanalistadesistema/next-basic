import { useRouter } from "next/router"

export default function nome() {
    const router = useRouter();
    const cod = router.query.codigo
    const nome = router.query.nome
    
    return (
        <div>
            <h1>rota / {cod} / {nome}</h1>
        </div>
    )
}