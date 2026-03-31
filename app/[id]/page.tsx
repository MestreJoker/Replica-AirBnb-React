import AcomodacaoDepoimentos from "@/src/widgets/AcomodacaoDepoimentos/AcomodacaoDepoimentos"
import AcomodacaoDetalhes from "@/src/widgets/AcomodacaoDetalhes/AcomodacaoDetalhes"
import Galeria from "@/src/widgets/Galeria/Galeria"
import HeaderInferior from "@/src/widgets/HeaderInferior/HeaderInferior"
import HeaderSuperior from "@/src/widgets/HeaderSuperior/HeaderSuperior"
import Rodape from "@/src/widgets/Rodape/Rodape"

interface PageProps {
    id: string
}

export default async function Page(
    { params }: { params: Promise<PageProps> }
) {
    let dados
    let dadoAtual
    const link = await params
    try {
        const response = await fetch('https://web.codans.com.br/airbnb')
        dados = await response.json()
        dadoAtual = await dados.accommodation.find((item: { slug: string }) => item.slug === link.id)
    }
    catch (erro) {
        console.error("Erro ao buscar dados:", erro)
        return <div>Erro ao carregar os dados.</div>
    }
    if (!dadoAtual) {
        return <div>Acomodação não encontrada.</div>
    }

    return (
        <div>
            <header className="pl-30 pr-30 w-screen pb-10 border-b border-b-gray-200 bg-gray-100 min-w-102">
                <HeaderSuperior />
                <HeaderInferior />
            </header>

            <main className="pl-12 pr-12 pt-5">
                <h1 className="text-3xl py-6 font-bold">{dadoAtual.title}</h1>
                <Galeria fotos={dadoAtual.photos} />

                <section className="flex mt-5 flex-col lg:flex-row xl:flex-row 2xl:flex-row">
                    <AcomodacaoDetalhes />
                    <AcomodacaoDepoimentos
                        dados={dadoAtual.testimonials}
                        rating={dadoAtual.rating}                    />

                </section>
            </main>
            <Rodape />
        </div>
    )
}