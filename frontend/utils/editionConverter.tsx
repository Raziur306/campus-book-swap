export const convertEdition  = (edition: number) => {
  const suffix =
    edition % 10 === 1 && edition !== 11
      ? "st"
      : edition % 10 === 2 && edition !== 12
      ? "nd"
      : edition % 10 === 3 && edition !== 13
      ? "rd"
      : "th";

  return `${edition}${suffix}`;
};
