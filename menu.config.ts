// Define the menu items
export const mainMenu = {
  products: "/products",
  solutions: "/solutions",
  whyInduction: "/#why-induction",
  whyUs: "/why-us",
  industries: "/#industries",
  contact: "/#quote",
};

export const contentMenu = {
  home: "/",
  products: "/products",
  fifthGeneration: "/fifth-generation-digital-induction-heating-power-supply",
  contact: "/contact",
};

export const menuLabel = (key: string) =>
  key === "whyInduction"
    ? "Why Use Induction"
    : key === "whyUs"
      ? "Why Us"
      : key === "fifthGeneration"
        ? "5th Generation"
        : key.charAt(0).toUpperCase() + key.slice(1);
