import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import GridPerguntas from "@/components/gridPerguntasFrequentes";

export default function Home() {
  return (
    <div className="flex flex-col mb-20">
      <AppBar state={[false, false, true]} />
      <div className="w-10/12  m-auto">
        <ImageCard
          img1="/images/image_ajuda.svg"
          img2="/images/image_ajuda_responsive.svg"
        />
        <Titulo name="Perguntas frequentes" />
        <GridPerguntas />
      </div>
    </div>
  );
}
