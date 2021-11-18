import { useRouter } from "next/router"

export default function buscar() {
    const router = useRouter();
    const cod = router.query.codigo
    
    return (
        <div>
            <h1>rota / {cod} / Buscar!!</h1>
        </div>
    )
}