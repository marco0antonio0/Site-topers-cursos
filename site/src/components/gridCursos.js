import { useRouter } from "next/router";

export default function GridCursos({ data }) {
  return (
    <>
      <div className=" flex flex-row m-auto">
        <div className="flex-wrap  flex flex-row  m-auto pt-10 pl-14 xl:pl-7 lg:pl-2 sm:pl-0">
          {data.map((e, i) => {
            return (
              <div
                key={i}
                className=" bg-white h-60 w-96 rounded-3xl shadow-md ml-5 mb-5 border-roxo border-2 flex flex-row cursor-pointer  lg:w-80 md_x:w-11/12 sm:flex-col sm:h-auto"
              >
                <CardItem name={e.nome} link={e.images_link2} id={e.id} />;
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function CardItem({ name = "Ciencias da computação", link = "", id = "" }) {
  const r = useRouter();
  return (
    <>
      <div className="w-4/5 m-auto sm:m-auto mx-0 md_x:h-auto md_x:w-auto md_x:ml-3 md_x:mr-5 ">
        <img src={link} alt="" className="select-none" />
      </div>
      <div className="flex flex-col w-mxw content-center ">
        <h1 className="text-5xl font-League_Gothic mt-5 ml-5 text-roxo">
          Curso
        </h1>
        <h3 className=" text-2xl font-League_Gothic mt-5 ml-5 text-roxo">
          {name}
        </h3>
        <div
          onClick={() => {
            r.push("/cursos/d?id=" + id);
          }}
          className="w-40 h-16 rounded-lg shadow-lg bg-roxo flex flex-col mt-5 ml-5 mb-5 lg:w-32 active:scale-[1.05]"
        >
          <span className="m-auto text-white">Saiba mais</span>
        </div>
      </div>
    </>
  );
}
