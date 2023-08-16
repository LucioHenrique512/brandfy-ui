import axios from "axios";

const api = axios.create({ baseURL: "https://oprojeto.onrender.com" });

type RenderPayloadType = {
  whatsApp: string;
  address: string;
  idTemplate: string;
  logo: string;
  price: number;
};

type RenderResponseType = {
  idTemplate: string;
  images: Array<string>;
};

export const postRender = async (payload: RenderPayloadType) => {
  return await api.post<RenderResponseType>("/generate/insert", payload);
};
