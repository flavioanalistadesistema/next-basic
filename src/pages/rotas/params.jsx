import { useRouter } from "next/router"

export default function params() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const name = router.query.name
    const id = router.query.id

    return (
        <div>
            <h1>Rotas Params: Name {name} e Id {id}</h1>
        </div>
    )
}