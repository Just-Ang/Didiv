import { addFavorite, removeFavorite } from '..//../redux/favoritesSlice';
import { deleteFavorite, createFavorite } from '../favorites';

export const handleFavorite = async (
  product,
  isFavorite,
  dispatch,
  toast
) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  // Якщо НЕ залогінений
  if (!token || !user) {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
      toast.warning(`${product.name} видалено з обраного`);
    } else {
      dispatch(addFavorite(product));
      toast.success(`${product.name} додано в обране`);
    }
    return true;
  }

  // Якщо залогінений
  const documentId = user.documentId;
  const id = user.id;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users/${id}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
 if (!response.ok) {
      throw new Error('Не вдалося отримати favorites користувача');
    }
    const userNew = await response.json();

    const data = await fetch(
      `${import.meta.env.VITE_API_URL}/api/favorites?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data: allFavorites } = await data.json();

    const favoritesOfUser = userNew?.favorites;

    if (isFavorite) {
      await deleteFavorite(product, favoritesOfUser, documentId, token);

      dispatch(removeFavorite(product.id));
      toast.warning(`${product.name} видалено з обраного`);
    return true;
    } else {
      await createFavorite(product, allFavorites, documentId, token);

      dispatch(addFavorite(product));
      toast.success(`${product.name} додано в обране`);
        return true;
    }
  } catch (err) {
    toast.error('Не вдалося оновити обране');

     return false;
  }
};