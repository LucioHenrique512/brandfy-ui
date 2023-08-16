"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext as contextHook,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ContextType = {
  setSelectedTemplate: Dispatch<SetStateAction<string>>;
  selectedTemplate: string;
  logoFile: string;
  setLogoFile: Dispatch<SetStateAction<string>>;
  whatsApp: string;
  address: string;
  setWhatsApp: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  result: Array<string>;
  setResult: Dispatch<SetStateAction<Array<string>>>;
};

const Context = createContext<ContextType>({} as ContextType);

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("2");
  const [logoFile, setLogoFile] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [whatsApp, setWhatsApp] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [result, setResult] = useState<Array<string>>([]);

  return (
    <Context.Provider
      value={{
        selectedTemplate,
        setSelectedTemplate,
        logoFile,
        setLogoFile,
        address,
        setAddress,
        setWhatsApp,
        whatsApp,
        price,
        setPrice,
        result,
        setResult,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContext = () => contextHook(Context);
