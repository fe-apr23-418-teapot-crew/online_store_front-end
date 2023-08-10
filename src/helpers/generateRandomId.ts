export const generateRandomId = () => {
  const randomId = Math.floor(Math.random() * 900000) + 100000;

  return randomId.toString();
};
