import { giftcardType, ordineType } from "../types/types";


export const newOrder = (
  data: ordineType
): ordineType => {
    const ordine = {...data};
    if (ordine.codFiscale === "") {
      throw new Error("Codice fiscale vuoto");
    }
    return ordine;
};
