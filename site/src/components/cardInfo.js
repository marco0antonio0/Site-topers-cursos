import { useRouter } from "next/router";

export default function CardInfo({ data }) {
  const dados = {
    nomeCurso: "Formação Cientista de Dados: O Curso Completo [2023]",
    detalhes: `Domine as mais Importantes Técnicas de Data Science
com Python e R e Seja o Profissional Mais Cobiçado da Atualidade`,
    img: "/images/pontuacao.svg",
  };
  const r = useRouter();
  return (
    <>
      <div className="flex flex-row bg-cinzaPerson1 mt-10 rounded-3xl lg:flex-col">
        <div className="flex-col w-10/12 lg:flex hidden bg-white m-auto mt-5">
          <img
            src={data.images_link}
            alt=""
            className="w-1/2 m-auto mt-5 mb-0 "
          />
        </div>
        <div className="flex flex-col w-2/3 text-white pl-10 pr-10 lg:w-mxw">
          <h1 className="text-3xl mt-20 font-bold lg:mt-5 ">{data.nome}</h1>
          <p className="text-2xl mt-5">{data.desc_short}</p>
          <img src={dados.img} alt="" className="h-10 m-auto ml-0 mt-5" />
          <div
            onClick={() => {
              r.push("/cursos/compra-concluida");
            }}
            className="h-16 w-52 bg-roxoPerson flex flex-col my-5 mb-10 shadow-2xl cursor-pointer select-none active:scale-[1.05] sm:h-14 sm:w-40"
          >
            <span className="m-auto font-League_Gothic text-3xl sm:text-2xl">
              Comprar !!
            </span>
          </div>
        </div>
        <img
          src={data.images_link}
          alt=""
          className="w-auto rounded-3xl border-r-4 border-b-4 border-cinzaPerson1 lg:hidden flex m-auto mr-0"
        />
      </div>
    </>
  );
}
