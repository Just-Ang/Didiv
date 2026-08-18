export const createCartItem = async (
  productId,
  quantity,
  userId,
  token
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/cart-items`,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        data: {
          product: productId,
          quantity,
          user: userId,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Не вдалося створити CartItem');
  }

  return response.json();
};