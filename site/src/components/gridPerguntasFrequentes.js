export default function GridPerguntas() {
  const data = [
    "Como Fazer Login?",
    "Como escolher um curso?",
    "Como se cadastrar na plataforma?",
    "Como comprar um curso?",
  ];
  return (
    <>
      <div className="flex flex-col w-mxw pt-10 md:pt-0">
        {data.map((e) => {
          return <CardPerson name={e} />;
        })}
      </div>
    </>
  );
}

function CardPerson({ name = "" }) {
  return (
    <>
      <div className="w-mxw h-20 border-4 border-cinzaPerson flex flex-row shadow-lg mt-5 cursor-pointer active:scale-[1.05]">
        <h1 className="font-League_Gothic text-3xl text-cinzaPerson1 m-auto select-none md:text-2x1 sm:text-xl">
          {name} 👆
        </h1>
      </div>
    </>
  );
}
