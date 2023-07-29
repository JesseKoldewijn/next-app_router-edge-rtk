export const slugify = (text: string) => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

export const unslugify = (text: string) => {
  return text
    .toString()
    .replace(/-/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]+/g, "")
    .replace(/--+/g, "-");
};

export const capitalize = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

export const hashFromString = (text: string) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  text = Array.from(
    { length: 100 + Math.floor(Math.random() * 100) },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");

  return text;
};
