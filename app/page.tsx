"use client";
import { useContext } from "@/app/context";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export default function Home() {
  const { setLogoFile, logoFile } = useContext();
  const [imgSrc, setImgSrc] = useState<any>(logoFile);

  const { push } = useRouter();

  const handleContinue = () => {
    if (!imgSrc) {
      alert("Insira um logo");
    }
    setLogoFile(imgSrc);

    push("/text-form");
  };

  const handleChange = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      setImgSrc(reader.result);
    };
  };

  const onChangeImagePress = () => {
    setImgSrc(null);
  };

  return (
    <div className="flex flex-col justify-between  h-[90%]">
      <div className="pt-2 w-full flex flex-col justify-center items-start">
        <h2 className="font-[100]">Insira um logo</h2>
        <p>Esse logo será inserido na imagem final</p>
      </div>
      <div>
        {Boolean(imgSrc) ? (
          <div className="flex items-center flex-col justify-center">
            <img src={imgSrc} width={"200"} />
            <Button
              onClick={onChangeImagePress}
              className="m-5"
              variant="outlined"
            >
              Trocar imagem
            </Button>
          </div>
        ) : (
          <FileUploader
            name="logo"
            multiple={false}
            label={"Carregue ou arreste e solte o arquivo da logo"}
            handleChange={handleChange}
            types={["PNG"]}
          />
        )}
      </div>
      <Button disabled={!imgSrc} onClick={handleContinue} variant="contained">
        Prosseguir
      </Button>
    </div>
  );
}
