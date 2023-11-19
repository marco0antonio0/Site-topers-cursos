import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import GridCursos from "@/components/gridCursos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AppBar state={[false, true, false]} />
      <div className="w-10/12  m-auto">
        {/* <ImageCard /> */}
        <Titulo />
        <GridCursos />
      </div>
    </div>
  );
}
