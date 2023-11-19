import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import SectionText from "@/components/sectionText";

export default function Home() {
  const textmarkdown = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non augue id metus mattis ornare ac et ipsum. Nunc et orci eget enim varius euismod`;

  return (
    <div className="flex flex-col">
      <AppBar state={[false, false, false]} />
      <div className="w-10/12  m-auto mb-20">
        <Titulo name="Politicas de Privacidade" />
        <ImageCard
          img1="/images/image_ajuda.svg"
          img2="/images/image_ajuda_responsive.svg"
        />
        <SectionText text={textmarkdown} />

        <Titulo name="Aspectos" />
        <SectionText text={textmarkdown} />

        <Titulo name="Respeito" />
        <SectionText text={textmarkdown} />
      </div>
    </div>
  );
}