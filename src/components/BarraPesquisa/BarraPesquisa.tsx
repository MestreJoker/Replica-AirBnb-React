import { IconSearch } from "@/src/assets/icones"
import Image from "next/image"

const BarraPesquisa = () => {
    return (
        <div id="barraPesquisa"
        className="flex rounded-4xl border-gray-300 border-1  min-w-80 max-w-150 h-15
        container mx-auto justify-between pr-5 pl-5 items-center bg-white">
            <input type="text" placeholder="Inicie a sua busca" className="outline-0 w-120 h-full text-lg" />
            <div className="bg-red-600 w-11 h-11 rounded-full flex justify-center items-center">
                <IconSearch color={'white'} aria-label="Ícone de pesquisa" size={20} />
            </div>
        </div>
    )
}

export default BarraPesquisa