import { UseToastOptions } from "@chakra-ui/react";
import { AxiosError } from "axios";

export const generateError = (error?: AxiosError): UseToastOptions => {
  if (error?.code === "ERR_NETWORK") {
    return {
      id: "error",
      title: "HATA",
      description: "İnternet bağlantınızı kontrol ediniz",
      status: "error",
      position: "top",
      isClosable: true,
    };
  }

  return {
    id: "error",
    title: "HATA",
    description: "Bir hata oluştu",
    status: "warning",
    position: "top",
    isClosable: true,
  };
};
