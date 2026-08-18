export const updateCartItem = async (
  documentId,
  quantity,
  token
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/cart-items/${documentId}`,
    {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        data: {
          quantity,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Не вдалося оновити CartItem');
  }

  return response.json();
};