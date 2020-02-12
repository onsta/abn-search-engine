export const isValidABN = (abn: string): boolean => {
  return !!abn.match(/^\d{11}$/);
};
