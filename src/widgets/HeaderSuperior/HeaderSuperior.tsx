import BotaoEntrar from "@/src/components/BotaoEntrar/BotaoEntrar"
import MenuSanduiche from "@/src/components/BotaoEntrar/MenuSanduiche"
import Logo from "@/src/components/Logo/Logo"
import { IconUserCircle } from "@tabler/icons-react"

const HeaderSuperior = () => {
    return (
        <div id="headerSuperior" className="flex justify-between items-center py-6 w-full w-1000">
            <Logo></Logo>
            <div className="menu flex gap-7">
                <a href="#" className="font-bold linksHeaderSuperior">Acomodações</a>
                <a href="#" className="linksHeaderSuperior">Experiências</a>
            </div>
            <div>
                <a href="#">
                    <MenuSanduiche />

                    <BotaoEntrar icone={(<IconUserCircle />)}>
                        Entrar
                    </BotaoEntrar>
                </a>
            </div>
            
        </div>
    )
}

export default HeaderSuperior

