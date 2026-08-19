import { clearCart } from '../../redux/cartSlice';

export const clearCartFromBackend = async (userId, dispatch, token) => {
  try {

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/cart-items?filters[user][id][$eq]=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Не вдалося отримати товари кошика');
    }

    const data = await response.json();

    await Promise.all(
      data.data.map(async (item) => {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/cart-items/${item.documentId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Не вдалося видалити товар з кошика');
        }
      })
    );

    dispatch(clearCart());
  } catch (error) {
    console.error('clearCartFromBackend error:', error);
    throw error;
  }
};