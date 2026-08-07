export const createFavorite = async (
  product,
  favorites,
  currentUserDocumentId,
  token
) => {

    console.log(product, favorites, currentUserDocumentId, token)
  // шукаємо запис по товару
  const favorite = favorites.find(
    (item) => item.product?.documentId === product?.documentId
  );

  // Якщо запис вже існує
  if (favorite) {
    const users = favorite.user.map((u) => u.documentId);

    // якщо користувача ще немає
    if (!users.includes(currentUserDocumentId)) {
      users.push(currentUserDocumentId);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/favorites/${favorite.documentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            data: {
              user: users,
            },
          }),
        }
      );

      if (!res.ok) throw new Error("Не вдалося оновити favorite");

      return await res.json();
    }

    return favorite;
  }

  // Якщо запису ще нема — створюємо
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/favorites`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          product: product.documentId,
          user: [currentUserDocumentId],
        },
      }),
    }
  );

  if (!res.ok) throw new Error("Не вдалося створити favorite");

  return await res.json();
};



export const deleteFavorite = async (
  product,
  favorites,
  currentUserDocumentId,
  token
) => {
  const favorite = favorites.find(
    (item) => item.product?.documentId === product?.documentId
  );

  if (!favorite) return;

  const users = favorite.user
    .filter((u) => u.documentId !== currentUserDocumentId)
    .map((u) => u.documentId);

  // Якщо після видалення нікого не залишилось — видаляємо запис
  if (users.length === 0) {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/favorites/${favorite.documentId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) throw new Error("Не вдалося видалити favorite");

    return;
  }

  // Інакше просто оновлюємо список користувачів
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/favorites/${favorite.documentId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          user: users,
        },
      }),
    }
  );

  if (!res.ok) throw new Error("Не вдалося оновити favorite");

  return await res.json();
};