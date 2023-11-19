import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import GridCursos from "@/components/gridCursos";
import { useEffect, useState } from "react";
import { api_config } from "@/models/api-connection";
import LoadScreen from "@/components/load";

export default function Home() {
  const [data, setdata] = useState();
  useEffect(() => {
    if (!data) {
      api_config.get("/get-all").then((e) => {
        setdata(e);
      });
    }
  });
  return (
    <div className="flex flex-col">
      <AppBar state={[false, true, false]} />
      {data ? (
        <div className="w-10/12  m-auto">
          {/* <ImageCard /> */}
          <Titulo />
          <GridCursos data={data.data} />
        </div>
      ) : (
        <LoadScreen />
      )}
    </div>
  );
}
