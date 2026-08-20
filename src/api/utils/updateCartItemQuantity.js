export const updateCartItemQuantity = async (cartItemId, quantity, token) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/cart-items/${cartItemId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
    throw new Error("Не вдалося оновити кількість товару");
  }

  return response.json();
};