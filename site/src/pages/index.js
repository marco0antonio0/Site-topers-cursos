import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AppBar state={[true, false, false]} />
      <div className="w-10/12  m-auto">
        <ImageCard />
        <GridComponents />
        <TemplateInformativo />
      </div>
    </div>
  );
}
