import {
  addToCart,
  setCartItemQuantity,
} from '../../redux/cartSlice';
import { createCartItem } from './createCartItem';
import { updateCartItem } from './updateCartItem';



export const handleCart = async (
  product,
  quantity,
  dispatch,
  toast
) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  // НЕ залогінений
  if (!token || !user) {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }

    toast.success(`${product.name} додано в кошик!`);

    return true;
  }

  // Залогінений
  const userId = user.id;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/cart-items?filters[user][id][$eq]=${userId}&populate=product`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Не вдалося отримати кошик користувача');
    }

    const { data: cartItems } = await response.json();

    // Шукаємо товар у кошику
    const cartItem = cartItems.find(
      (item) => item.product?.documentId === product.documentId
    );

    if (cartItem) {
      // Товар уже є → збільшуємо його кількість
      const newQuantity = cartItem.quantity + quantity;

      if (newQuantity > product.stock) {
        toast.warning(`Доступно лише ${product.stock} шт.`);
        return false;
      }

      await updateCartItem(
        cartItem.documentId,
        newQuantity,
        token
      );

      dispatch(
        setCartItemQuantity({
          id: product.id,
          quantity: newQuantity,
        })
      );
    } else {
      // Товару ще немає → створюємо CartItem
      await createCartItem(
        product.documentId,
        quantity,
        userId,
        token
      );

      dispatch(
        addToCart({
          ...product,
        })
      );

      // addToCart додає тільки 1,
      // тому якщо quantity > 1 — встановлюємо правильну кількість
      if (quantity > 1) {
        dispatch(
          setCartItemQuantity({
            id: product.id,
            quantity,
          })
        );
      }
    }

    toast.success(`${product.name} додано в кошик!`);

    return true;
  } catch (err) {
    console.error(err);

    toast.error('Не вдалося додати товар у кошик');

    return false;
  }
};