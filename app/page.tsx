import Acomodacoes from "@/src/widgets/Acomodacoes/Acomodacoes";
import Rodape from "@/src/widgets/Rodape/Rodape";
import HeaderInferior from "@/src/widgets/HeaderInferior/HeaderInferior";
import HeaderSuperior from "@/src/widgets/HeaderSuperior/HeaderSuperior";
import Navigation from "@/src/widgets/Navigation";
import Acomo from "@/src/widgets/Acomodacoes/Acomodacoes2";

export default function Home() {
  return (
    <>
      <header className="pl-30 pr-30 w-screen pb-10 border-b border-b-gray-200 bg-gray-100 min-w-102">
        <HeaderSuperior />
        <HeaderInferior />
      </header>
      <main className="pl-12 pr-12 pt-5">
        <Navigation />
        <Acomo />
      </main>

      <Rodape>

      </Rodape>
    </>
  );
}
