const Rodape = () =>{
    const ano = new Date()
    return(
        <footer className="mt-5 pl-12 pr-12 bg-gray-100 flex flex-col gap-2 py-5 border-t border-gray-200">
            <div className="font-bold text-lg">
                &copy; {ano.getFullYear()} AirBnb, Inc
            </div>
            <div className="flex gap-4 items-center text-xs md:text-sm">
                <a href="">Privacidade</a>
                <p className="text-4xl">&middot;</p>
                <a href="">Termos</a>
                <p className="text-4xl">&middot;</p>
                <a href="">Mapa do Site</a>
                <p className="text-4xl">&middot;</p>
                <a href="">Informações da Empresa</a>
            </div>
        </footer>
    )
}

export default Rodape