import { useRouter } from "next/router";

export default function GridPerguntas() {
  const r = useRouter();
  const data = [
    { nome: "Sobre Termos e Condições", link: "/blogs/termos" },
    { nome: "Política de Privacidade", link: "/blogs/privacidade" },
  ];
  return (
    <>
      <div className="flex flex-col w-mxw pt-10 md:pt-0">
        {data.map((e, i) => {
          return (
            <div
              onClick={() => r.push(e.link)}
              key={i}
              className="w-mxw h-20 border-4 border-cinzaPerson flex flex-row shadow-lg mt-5 cursor-pointer active:scale-[1.05]"
            >
              <CardPerson name={e.nome} />;
            </div>
          );
        })}
      </div>
    </>
  );
}

function CardPerson({ name = "" }) {
  return (
    <>
      <h1 className="font-League_Gothic text-3xl text-cinzaPerson1 m-auto select-none md:text-2x1 sm:text-xl">
        {name} 👆
      </h1>
    </>
  );
}
