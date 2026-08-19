export const fetchUserCart = async (token, userId) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/api/cart-items?filters[user][documentId][$eq]=${userId}&populate[product][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Не вдалося отримати кошик');
  }

  const data = await response.json();

  return data.data
    .map((cartItem) => {
      if (!cartItem.product) return null;

      return {
        ...cartItem.product,
        quantity: cartItem.quantity,
      };
    })
    .filter(Boolean);
};