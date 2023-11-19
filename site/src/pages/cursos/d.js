import AppBar from "@/components/topbar";
import CardInfo from "@/components/cardInfo";
import Titulo from "@/components/ComponentTitulo";
import { useEffect, useState } from "react";
import { api_config } from "@/models/api-connection";

export default function Home() {
  const [data, setdata] = useState();
  useEffect(() => {
    if (!data) {
      api_config.get("/get-all").then((e) => {
        console.log(e);
        try {
          setdata(e);
        } catch (error) {
          setdata({ status: false, data: [] });
        }
      });
    }
  }, [data]);
  return (
    <div className="flex flex-col">
      <AppBar state={[false, false, false]} />
      {data ? (
        <div className="w-10/12  m-auto">
          <CardInfo data={data.data[0]} />
          <Titulo name="CURSO COMPLETASSO" />
          <p className="text-2xl mt-3 mb-20">{data.data[0].desc}</p>
        </div>
      ) : (
        false
      )}
    </div>
  );
}
