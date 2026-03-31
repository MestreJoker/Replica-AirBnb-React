

type BotaoProps = {
    icone: React.ReactNode
    children: React.ReactNode
}

const BotaoEntrar = (props: BotaoProps) => {
    return (
        <button id="botaoEntrar" className="border border-gray-400 rounded-md flex box-boder p-1.5 gap-2 justify-between bg-white max-h-10" >
            {props.icone}
            <div>{props.children}</div>
        </button>
    )
}

export default BotaoEntrar