"use client";
import { useContext } from "@/app/context";
import { useRouter } from "next/navigation";
import { Button, Stack, TextField } from "@mui/material";
import { BackHeader } from "../components/back-header";
import { useEffect, useState } from "react";
import { postRender } from "../api";

export default function Result() {
  const { back, push } = useRouter();

  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const { logoFile, address, whatsApp, selectedTemplate } = useContext();

  useEffect(() => {
    const render = async () => {
      try {
        setLoading(true);
        const response = await postRender({
          address,
          idTemplate: selectedTemplate,
          logo: logoFile,
          whatsApp,
        });
        setResult(response.data.images[0]);
      } catch (error: any) {
        alert(error?.message ?? "Deu ruim!");
      } finally {
        setLoading(false);
      }
    };
    if (!result) render();
  }, []);

  const handleGenerate = () => {
    if (!logoFile) {
      alert("Favor insira um logo");
      push("/");
    }
    push("/result");
  };

  return (
    <div className="flex flex-col justify-between  h-[90%]">
      <div>
        <BackHeader onPress={back} />
        <div className="pt-2 w-full flex flex-col justify-center items-start">
          <h2 className="font-[100]">Resultado</h2>
        </div>
      </div>
      <>
        {loading ? (
          <>Carregando...</>
        ) : (
          <>
            <img src={result} />
          </>
        )}
      </>
      <Button
        disabled={!address || !whatsApp}
        onClick={handleGenerate}
        variant="contained"
      >
        Prosseguir
      </Button>
    </div>
  );
}
