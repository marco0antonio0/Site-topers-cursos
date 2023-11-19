export default function GridCursos({ data }) {
  // const data = [
  //   { name: "ciencias da computação", link: "" },
  //   { name: "ciencias da computação", link: "" },
  //   { name: "ciencias da computação", link: "" },
  //   { name: "ciencias da computação", link: "" },
  //   { name: "ciencias da computação", link: "" },
  //   { name: "ciencias da computação", link: "" },
  // ];
  return (
    <>
      <div className=" flex flex-row m-auto">
        <div className="flex-wrap w-mxw flex flex-row  m-auto pt-10">
          {data.map((e) => {
            return <CardItem name={e.nome} />;
          })}
        </div>
      </div>
    </>
  );
}

function CardItem({ name = "Ciencias da computação" }) {
  return (
    <>
      <div className="bg-white h-60 w-96 rounded-3xl shadow-md ml-5 mb-5 border-roxo border-2 flex flex-row cursor-pointer active:scale-[1.05] lg:w-80 md_x:w-11/12 sm:flex-col sm:h-auto">
        <img
          src="/images/image_cursos.svg"
          alt=""
          className="w-1/2 select-none sm:m-auto mx-0"
        />

        <div className="flex flex-col w-mxw content-center ">
          <h1 className="text-5xl font-League_Gothic mt-5 ml-5 text-roxo">
            Curso
          </h1>
          <h3 className=" text-2xl font-League_Gothic mt-5 ml-5 text-roxo">
            {name}
          </h3>
          <div className="w-40 h-16 rounded-lg shadow-lg bg-roxo flex flex-col mt-5 ml-5 mb-5 lg:w-32">
            <span className="m-auto text-white">Saiba mais</span>
          </div>
        </div>
      </div>
    </>
  );
}
