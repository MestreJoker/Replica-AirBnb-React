import Image from "next/image"
type Foto = {
    id: string
    source: string
    description: string
}
interface GaleriaProps {
    fotos: Foto[]
}

const Galeria = (
    { fotos }: GaleriaProps
) => {
    return (
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 ">
            {fotos.map((item, indice) => {
                let primeiraFoto = ''
                let arredondamento = ''
                if (indice == 0) {
                    primeiraFoto = 'md:col-span-2 md:row-span-2 xl:rounded-tl-3xl xl:rounded-bl-3xl'
                }
                else if(indice == 4){
                    arredondamento = 'xl:rounded-tr-3xl'
                }
                else if(indice == 8){
                    arredondamento = 'xl:rounded-br-3xl'
                }
                else{
                    arredondamento = ''
                }
                if(indice <= 8){
                    return(
                    <Image
                        className={`aspect-square max-sm:rounded-3xl ${primeiraFoto} ${arredondamento}`}
                        key={indice}
                        src={item.source}
                        alt={item.description}
                        width={1280}
                        height={720}
                    />
                )
                }
                

            })}
        </div>
    )
}

export default Galeria