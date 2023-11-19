import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import { useRouter } from "next/router";

export default function Home() {
  const r = useRouter();
  return (
    <div className="flex flex-col">
      <AppBar state={[false, false, false]} />
      <div className="w-10/12  m-auto">
        <div className="w-1/2 m-auto lg:w-2/3 sm:w-10/12">
          <ImageCard
            img1="/images/image_compra_concluida_responsive.svg"
            img2="/images/image_compra_concluida_responsive.svg"
          />
        </div>
        <div
          onClick={(e) => {
            r.push("/");
          }}
          className="w-52 h-20 bg-roxoPerson flex flex-col shadow-lg m-auto mt-10 active:scale-[1.05] cursor-pointer select-none md:w-40 md:h-16 "
        >
          <span className="text-white text-xl m-auto md:text-lg">
            Ir para inicio
          </span>
        </div>
      </div>
    </div>
  );
}