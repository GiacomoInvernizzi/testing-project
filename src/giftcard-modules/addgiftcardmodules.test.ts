import { ordineType } from "../types/types";

let giftcard: giftcardType = {
  tipo: "digitale",
  taglio: 10,
  quantita: 1,
};

let updatedOrder: ordineType = addGiftCard(giftcard);

describe("[Testcase] addGiftCard", () => {
  beforeEach(() => {
    giftcard = {
      tipo: "digitale",
      taglio: 10,
      quantita: 1,
    };

    updatedOrder = addGiftCard(giftcard);
  });

  test("tipologia è digitale/cartacea", () => {
    expect(updatedOrder.wallet[length - 1].tipo).toBe("Digitale" || "Cartacea");
  });

  test("taglio è 10/20/50/100", () => {
    expect(updatedOrder.wallet[length - 1].taglio).toBe(
      "10" || "20" || "50" || "100"
    );
  });

  test("quantità è un numero", () => {
    expect(updatedOrder.wallet[length - 1].quantita).toBe("number");
  });

  test("Stack dei duplicati", () => {
    for (let i = 0; i < order.wallet.length; i++) {
      if (
        giftcard.tipo === order.wallet[i].tipo &&
        giftcard.taglio === order.wallet[i].taglio
      ) {
        expect(updatedOrder.wallet[i].quantita).toBe(
          order.wallet[i].quantita + 1
        );
      }
    }
  });
});
