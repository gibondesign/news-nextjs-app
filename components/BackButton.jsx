'use client'
import { useRouter } from "next/router"


export default function BackButton() {

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

return <button onClick={handleBack}> Get back</button>
}