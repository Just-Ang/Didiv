import { removeFromCart } from "../../redux/cartSlice";

export const deleteCartItemFromBackend = async (
  product,
  userId,
  dispatch,
  token
) => {
  try {
 const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/cart-items?filters[user][id][$eq]=${userId}&filters[product][id][$eq]=${product.id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

    if (!response.ok) {
      throw new Error('Не вдалося знайти товар у кошику');
    }

    const data = await response.json();

    const cartItem = data.data[0];

    if (!cartItem) {
      throw new Error('Товар у кошику не знайдено');
    }

    const deleteResponse = await fetch(
      `${import.meta.env.VITE_API_URL}/api/cart-items/${cartItem.documentId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!deleteResponse.ok) {
      throw new Error('Не вдалося видалити товар');
    }

    dispatch(removeFromCart(product));
  } catch (error) {
    console.error('deleteCartItemFromBackend error:', error);
    throw error;
  }
};