"use client";
import { useContext } from "@/app/context";
import { useRouter } from "next/navigation";
import { Button, Stack, TextField } from "@mui/material";
import { BackHeader } from "../components/back-header";

export default function TextForm() {
  const { back, push } = useRouter();

  const { logoFile, address, setAddress, whatsApp, setWhatsApp } = useContext();

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
          <h2 className="font-[100]">Insira o texto</h2>
          <p>Insira o texto que irá nos campos de informações</p>
        </div>
      </div>
      <Stack component="form" spacing={2} noValidate autoComplete="off">
        <TextField
          hiddenLabel
          onChange={(e) => setWhatsApp(e.target.value)}
          value={whatsApp}
          variant="outlined"
          fullWidth
          label="Whatsapp"
        />
        <TextField
          hiddenLabel
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          variant="outlined"
          fullWidth
          label="Endereço"
        />
      </Stack>
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
