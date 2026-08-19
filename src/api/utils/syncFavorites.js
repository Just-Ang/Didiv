 export const syncFavorites = async (localFavorites, token, userId) => {
  if (!localFavorites.length) return;

  await Promise.all(
    localFavorites.map(async (item) => {
      // Шукаємо Favorite по товару
      const favoriteRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/favorites?filters[product][documentId][$eq]=${item.documentId}&populate=user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!favoriteRes.ok) {
        console.error(await favoriteRes.json());
        return;
      }

      const favoriteData = await favoriteRes.json();

      // Якщо Favorite вже існує
      if (favoriteData.data.length > 0) {
        const favorite = favoriteData.data[0];


        const users = favorite.user || [];

        const alreadyExists = users.some(
          (user) => user.documentId === userId
        );

        if (alreadyExists) return;

        // Додаємо нового користувача
        const updateRes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/favorites/${favorite.documentId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                user: [
                  ...users.map((u) => u.documentId),
                  userId,
                ],
              },
            }),
          }
        );

        if (!updateRes.ok) {
          console.error(await updateRes.json());
        }

        return;
      }

      // Якщо Favorite ще не існує
      const createRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/favorites`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              product: item.documentId,
              user: [userId],
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