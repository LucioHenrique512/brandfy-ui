"use client";
import { useContext } from "@/app/context";
import { useRouter } from "next/navigation";
import { Button, Stack, TextField } from "@mui/material";
import { BackHeader } from "../components/back-header";
import { useEffect, useState } from "react";
import { postRender } from "../api";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Result() {
  const { back, push } = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const {
    logoFile,
    address,
    whatsApp,
    selectedTemplate,
    price,
    result,
    setResult,
  } = useContext();

  useEffect(() => {
    const render = async () => {
      try {
        setLoading(true);
        const response = await postRender({
          address,
          idTemplate: selectedTemplate,
          logo: logoFile,
          whatsApp,
          price,
        });
        setResult(response.data.images);
      } catch (error: any) {
        push("/");
        alert(error?.message ?? "Deu ruim!");
      } finally {
        setLoading(false);
      }
    };
    if (result.length === 0) render();
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
        {loading && result.length === 0 ? (
          <>Carregando...</>
        ) : (
          <>
            <Carousel>
              {result.map((imgPath, index) => (
                <div key={index}>
                  <img src={imgPath} />
                </div>
              ))}
            </Carousel>
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
