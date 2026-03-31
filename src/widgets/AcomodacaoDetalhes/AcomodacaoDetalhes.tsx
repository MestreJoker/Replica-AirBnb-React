import {
    IconPhoto,
    IconToolsKitchen2,
    IconDesk,
    IconPool,
    IconBrandCarbon,
    IconSailboat,
    IconWifi,
    IconParking,
    IconAlarmSmoke,
    IconDog
} from "@tabler/icons-react"

const AcomodacaoDetalhes = () => {
    return (
        <div className="w-full border-red-500 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <h2 className="font-bold text-lg">Detalhes</h2>
            <div className="flex gap-2 items-center text-sm">
                <a href="">10 Hóspedes</a>
                <p className="text-4xl">&middot;</p>
                <a href="">5 Quartos</a>
                <p className="text-4xl">&middot;</p>
                <a href="">5 Camas</a>
                <p className="text-4xl">&middot;</p>
                <a href="">6 Banheiros</a>
            </div>
            <hr className="md:hidden" />
            <h3 className="font-bold text-md mt-3 text-center lg:text-left">O que esse lugar oferece?</h3>
            <div className="w-full py-4">

                <ul className="pt-2 grid grid-cols-2 gap-y-6 text-sm md:text-md max-sm:gap-x-7">
                    <li className="flex gap-1.5">
                        <IconPhoto />
                        <span>Vista para as montanhas</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconToolsKitchen2 />
                        <span>Cozinha</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconDesk />
                        <span>Espaço de tabalho exclusivo</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconPool />
                        <span>Piscina privativa</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconBrandCarbon />
                        <span className="line-through">Alarme de segurança p/ gás</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconSailboat />
                        <span>Vista para as águas</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconWifi />
                        <span>Wi-Fi rápido (83 Mbps)</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconParking />
                        <span>Estacionamento incluído</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconDog />
                        <span>Permitido animais</span>
                    </li>
                    <li className="flex gap-1.5">
                        <IconAlarmSmoke />
                        <span className="line-through">Detector de fumaça</span>
                    </li>
                </ul>
                <hr className="mt-2 md:hidden" />


            </div>
        </div>

    )
}

export default AcomodacaoDetalhes