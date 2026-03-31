'use client'
import { IconHeart, IconStarFilled } from "@tabler/icons-react"
import Image from "next/image"
import { ReactNode, useState } from "react"
import Link from "next/link"



interface AcomodacaoItemProps {
    children: React.ReactNode
    titulo: ReactNode
    anfitriao: React.ReactNode
    data: React.ReactNode
    preco: React.ReactNode
    nota: React.ReactNode
    preferido: boolean
}
const AcomodacaoItem = (props: AcomodacaoItemProps) => {
    const [cor, setCor] = useState('black')
    return (
        <figure className="relative pt-2 figure">
            <div className="absolute flex justify-between pl-5 pr-5 pt-3 w-full items-center">
                <div>
                    {props.preferido && (
                        <p className="bg-white p-2 rounded-3xl font-bold border border-gray-200">Preferido dos hóspedes</p>
                    )}
                </div>
                    <IconHeart fill={cor} opacity={80} color="white" className="coracaoCard"
                    onClick={(e) => {
                        e.preventDefault();
                        if(cor == 'black'){
                            setCor('red')
                        }
                        else{
                            setCor('black')
                        }
                    }}/>
            </div>
            {props.children}
            <figcaption className="pt-1">
                <div className="flex justify-between">
                    <p className="font-bold">{props.titulo}</p>
                    <div className="flex items-center gap-3">
                        <IconStarFilled size={12} />
                        <p>{props.nota}</p>
                    </div>
                </div>
                <div>
                    <p>Anfitriã(o): {props.anfitriao}</p>
                </div>
                <div>
                    <p>{props.data}</p>
                </div>
                <div>
                    <p><b>R$ {props.preco}</b> noite</p>
                </div>
            </figcaption>
        </figure>
    )
}

export default AcomodacaoItem