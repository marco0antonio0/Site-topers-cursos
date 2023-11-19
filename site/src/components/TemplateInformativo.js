import { useRouter } from "next/router";

export default function TemplateInformativo() {
  return (
    <>
      <div className="lg:hidden flex">
        <Layout_descktop />
      </div>
      <div className="lg:flex hidden">
        <Layout_smartphone />
      </div>
    </>
  );
}
function Layout_smartphone() {
  const r = useRouter();
  return (
    <>
      <div className="flex flex-col bg-cinzas rounded-2xl shadow-xl mt-5 mb-10 pt-5 w-mxw pr-3">
        <div className="flex flex-col w-4/5 m-auto">
          <h1 className="text-6xl font-Lalezar text-cinzaPerson1 m-auto mt-10 ml-0 sm:text-5xl ">
            Comece sua <br />
            Jornada <br />
            Hoje
          </h1>
          <p className="text-3xl m-auto mt-10 mb-0 ml-0 text-justify sm:mt-5 sm:text-2xl smx:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
            diam ut sollicitudin
          </p>
          <div
            onClick={() => r.push("/cursos")}
            className="bg-roxo shadow-md h-20 w-52 flex flex-col text-white text-xl rounded-2xl ml-0 mt-10 mb-3 cursor-pointer active:scale-[1.05] select-none sm:h-16 sm:w-44 sm:text-lg"
          >
            <span className="m-auto ">ver cursos 🚀</span>
          </div>
          <div className="flex flex-row gap-5  mt-5 mb-5 w-mxw px-10 md:px-0">
            <img src="/images/components_cards1.svg" alt="" className="w-1/2" />
            <img src="/images/components_cards2.svg" alt="" className="w-1/2" />
          </div>
          <div className="flex flex-row gap-5 px-10 md:px-0 mb-5">
            <img src="/images/components_cards3.svg" alt="" className="w-1/2" />
            <img src="/images/components_cards4.svg" alt="" className="w-1/2" />
          </div>
        </div>
      </div>
    </>
  );
}

function Layout_descktop() {
  const r = useRouter();
  return (
    <>
      <div className="flex flex-row bg-cinzas rounded-2xl shadow-xl mt-5 pt-10 w-mxw pr-3">
        <div className="flex flex-col w-1/2 pl-20 xl:pl-10">
          <h1 className="text-6xl  font-Lalezar text-cinzaPerson1 m-auto mt-10 ml-0 ">
            Comece sua <br />
            Jornada <br />
            Hoje
          </h1>
          <p className="text-3xl m-auto mt-10 mb-0 ml-0 text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
            diam ut sollicitudin
          </p>
          <div
            onClick={() => r.push("/cursos")}
            className="bg-roxo h-20 w-52 shadow-md flex flex-col text-white text-xl rounded-2xl ml-0 mt-10 mb-10 cursor-pointer active:scale-[1.05] select-none "
          >
            <span className="m-auto ">ver cursos</span>
          </div>
        </div>
        <div className="flex flex-col w-1/2 align-middle content-center items-center gap-5 pl-3">
          <div className="flex flex-row gap-5  mt-10 ml-0">
            <img src="/images/components_cards1.svg" alt="" className="" />
            <img src="/images/components_cards2.svg" alt="" className="" />
          </div>
          <div className="flex flex-row gap-5 ">
            <img src="/images/components_cards3.svg" alt="" className="" />
            <img src="/images/components_cards4.svg" alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
}
