export type giftcardType = {
  tipo: "digitale" | "cartacea";
  taglio: 10 | 20 | 50 | 100;
  quantita: number;
};

export type ordineType = {
  codFiscale: string;
  nome: string;
  cognome: string;
  email: string;
  wallet: giftcardType[];
};
