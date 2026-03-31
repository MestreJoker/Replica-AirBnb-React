"use client"
import AcomodacaoItem from "@/src/components/AcomodacaoItem/AcomodacaoItem"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

type Acomodacao = {
    title: string
    slug: string
    location: { description: string }
    host: string
    date: string
    price: number
    rating: number
    hasBadge: boolean
    photos: { source: string; description: string }[]
}

export default function Acomo() {
    const [dados, setDados] = useState<Acomodacao[]>([])

    useEffect(() => {
        async function ResgatandoDados() {
            try {
                const response = await fetch('https://web.codans.com.br/airbnb')
                const json = await response.json()
                setDados(json.accommodation as Acomodacao[])
            }
            catch (error) {
                console.log(error)
            }

        }
        ResgatandoDados()
    }, [])
    return (
        <section className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-evenly py-6 gap-4">
            {dados.map((item, indice) => {
                if (item.title != "Título") {
                    return (
                        <Link href={item.slug} key={indice} >
                            <AcomodacaoItem key={indice}
                                titulo={item.location.description}
                                anfitriao={item.host}
                                data={item.date}
                                preco={item.price}
                                nota={item.rating}
                                preferido={item.hasBadge}
                            >
                                <div key={indice}>
                                    <Image
                                        className="w-full aspect-square object-cover rounded-xl"
                                        src={item.photos[0].source}
                                        alt={item.photos[0].description}
                                        width={300}
                                        height={300}
                                    />

                                </div>
                            </AcomodacaoItem>
                        </Link>
                    )
                }
            })}
        </section>
    )
}