let data: ordineType = {
  codFiscale: "RSSMRA80A01H501A",
  nome: "Mario",
  cognome: "Rossi",
  email: "mario.rossi@hotmail.com",
  wallet: [],
};

let result: ordineType = newOrder(
  ...data
);

describe("[Testcase] newOrder", () => {
  beforeEach(() => {
    data = {
      codFiscale: "RSSMRA80A01H501A",
      nome: "Mario",
      cognome: "Rossi",
      email: "mario.rossi@hotmail.com",
      wallet: [],
    };
    result = newOrder(
      ...data
    );
  });

  test("Codice fiscale è una stringa", () => {
    expect(typeof result.codFiscale).toBe("string");
  });
  test("Codice fiscale valido", () => {
    expect(result.codFiscale).toBe("RSSMRA80A01H501A");
  });
  test("codice fiscale vuoto lancia un errore", () => {
    let data.codFiscale = "";
    expect(() =>
      newOrder(...data)
    ).toThrow("Codice fiscale vuoto");
  });

  test("codice fiscale non di 16 caratteri", () => {
    data.codFiscale = "1";
    expect(result.codFiscale).toHaveLength(16);      
  });

  test("Nome è una stringa", () => {
    expect(typeof result.nome).toBe("string");
  });
  test("Nome valido", () => {
    expect(result.nome).toBe("Mario");
  });
  test("nome vuoto lancia un errore", () => {
    data.nome = "";
    expect(result.nome).toHaveLength(0);
  });

  test("nome con più di 50 caratteri lancia un errore", () => {
    data.nome = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    expect(result.nome).toBeGreaterThanOrEqual(50);
  });

  test("Cognome è una stringa", () => {
    expect(typeof result.cognome).toBe("string");
  });
  test("Cognome valido", () => {
    expect(result.cognome).toBe("Rossi");
  });
  test("cognome vuoto lancia un errore", () => {
    data.cognome = "";
    expect(result.cognome).toHaveLength(0);
  });

  test("cognome con più di 50 caratteri lancia un errore", () => {
    data.cognome = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    expect(result.cognome).toBeGreaterThanOrEqual(50);
  });

  test("Email è una stringa", () => {
    expect(typeof result.email).toBe("string");
  });
  test("Email valida", () => {
    expect(result.email).toBe("mario.rossi@hotmail.com");
  });
  test("email vuota", () => {
    result.email = "";
    expect(result.email).toHaveLength(0);
  });
  test("email non valida", () => {
    data.email = "mario.rossi";
    expect(() => newOrder(...data)).not.toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
  });
});
