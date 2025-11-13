export const isValidCNPJ = (cnpj: string): boolean => {
  const cleanCNPJ = cnpj.replace(/\D/g, "");
  if (cleanCNPJ.length !== 14 || /^(\d)\1{13}$/.test(cleanCNPJ)) return false;

  const calcDigit = (base: string, weights: number[]): number => {
    const sum = [...base].reduce((acc, digit, i) => acc + +digit * weights[i], 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, ...weights1];

  const base = cleanCNPJ.slice(0, 12);
  const digit1 = calcDigit(base, weights1);
  const digit2 = calcDigit(base + digit1, weights2);

  return digit1 === +cleanCNPJ[12] && digit2 === +cleanCNPJ[13];
};