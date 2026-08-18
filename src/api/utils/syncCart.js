export const syncCart = async (localCartItems, token, userId) => {
    console.log('localCartItems', localCartItems)
  if (!localCartItems.length) return;

  await Promise.all(
   localCartItems.map(async (item) => {
      // Шукаємо Cart цього користувача + цього товару
      const cartRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cart-items?filters[user][documentId][$eq]=${userId}&filters[product][documentId][$eq]=${item.documentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!cartRes.ok) {
        console.error(await cartRes.json());
        return;
      }

      const cartData = await cartRes.json();
      console.log('cartData', cartData)
      // Такий товар уже є в кошику користувача
      if (cartData.data.length > 0) {
        const cartItem = cartData.data[0];

        const updateRes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/cart-items/${cartItem.documentId}`,
          {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: {
                quantity: item.quantity,
              },
            }),
          }
        );

        if (!updateRes.ok) {
          console.error(await updateRes.json());
        }

        return;
      }

      // Якщо такого товару в кошику користувача ще немає
      const createRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cart-items`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              product: item.documentId,
              user: userId,
              quantity: item.quantity,
            },
          }),
        }
      );

      if (!createRes.ok) {
        console.error(await createRes.json());
      }
    })
  );
};