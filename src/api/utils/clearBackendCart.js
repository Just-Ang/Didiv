import { clearCart } from "../../redux/cartSlice";

export const clearBackendCart = async (user, token, dispatch) => {
  if (!user?.documentId || !token) return;

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/cart-items?filters[user][documentId][$eq]=${user.documentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Не вдалося отримати кошик');
  }

  const { data } = await response.json();

  await Promise.all(
    data.map((item) =>
      fetch(
        `${import.meta.env.VITE_API_URL}/api/cart-items/${item.documentId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    )
  );

  dispatch(clearCart());
};