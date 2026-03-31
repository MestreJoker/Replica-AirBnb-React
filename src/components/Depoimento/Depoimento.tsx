'use client'
import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"

interface PropsDepoimento {
    id: string
    name: string
    image: string
    comment: string
    rating: string
    customerTime: string
    createdAt: string
    stayed: string

}

export default function Depoimento(props: PropsDepoimento) {
    const numeroEstrelas: string = String(props.rating)
    let ultimaEstrela = <IconStarFilled key={4} width={10} color="red" />
    if (numeroEstrelas.endsWith('.5')) {
        ultimaEstrela = <IconStarHalfFilled color='red' key={4} width={11} />
    }

    return (
        <div className="flex py-3 gap-3 bg-gray-100 pl-3 rounded-2xl hover:scale-105 transition-all">
            <div>
                <Image
                    key={props.id}
                    src={props.image}
                    width={60}
                    height={60}
                    alt={""}
                    className="rounded-full aspect-square"
                />
            </div>
            <div>
                <div className="flex gap-3 items-center">
                    <p className="font-bold">{props.name} </p>
                    <span className="flex items-center gap-1 ">
                        {(() => {
                            const estrelas = [];
                            for (let i = 0; i < Number(numeroEstrelas) - 1; i++) {
                                estrelas.push(<IconStarFilled color="red" key={i} width={11} />);
                            }
                            return estrelas;
                        })()}
                        {ultimaEstrela}

                        {(() => {
                            let estrelasTotais: number = Math.ceil(Number(numeroEstrelas));
                            const estrelasVazias = []
                            while(estrelasTotais < 5){
                                estrelasVazias.push(<IconStar color="black" key="a"width={11}/>)
                                estrelasTotais = estrelasTotais + 1
                            }
                            
                            return estrelasVazias;
                        })()}

                        {props.rating}
                    </span>
                </div>
                <p className="text-sm">{props.comment}</p>
            </div>
        </div>

    )
}
