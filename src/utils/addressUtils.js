export const parseAddress = (fullAddress) => {
  if (!fullAddress || typeof fullAddress !== "string") {
    return { city: null, country: null };
  }

  const parts = fullAddress.split(",").map((part) => part.trim());
  const city = parts.length > 1 ? parts[1] : null;
  const country = parts.length > 2 ? parts[2] : null;

  return { city, country };
};
