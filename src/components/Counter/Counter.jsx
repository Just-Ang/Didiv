import { useDispatch } from 'react-redux';
import { CounterWrapper } from './Counter.styled';
import {
  decrementQuantity,
  incrementQuantity,
} from '../../redux/cartSlice';

const Counter = ({ item, cartItem, user, token, disabled, isSoldOut  }) => {
  const dispatch = useDispatch();

  const handleIncrement = async () => {
    if (disabled) return;
    const newQuantity = item.quantity + 1;

    // Для неавторизованого користувача
    if (!user) {
      dispatch(
        incrementQuantity({
          id: item.id,
          stock: item.stock,
        })
      );
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cart-items/${
          cartItem.documentId
        }`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            data: {
              quantity: newQuantity,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Не вдалося оновити кількість');
      }

      // Redux змінюємо тільки якщо бекенд успішний
      dispatch(
        incrementQuantity({
          id: item.id,
          stock: item.stock,
        })
      );
    } catch (error) {
      console.error('Помилка оновлення кількості:', error);
    }
  };

  const handleDecrement = async () => {
    if (disabled) return;
    const newQuantity = item.quantity - 1;

    if (!user) {
      dispatch(decrementQuantity(item.id));
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cart-items/${
          cartItem.documentId
        }`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            data: {
              quantity: newQuantity,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Не вдалося оновити кількість');
      }

      // Redux змінюємо тільки якщо бекенд успішний
      dispatch(decrementQuantity(item.id));
    } catch (error) {
      console.error('Помилка оновлення кількості:', error);
    }
  };

  return (
    <CounterWrapper>
   <button
  onClick={handleDecrement}
  disabled={isSoldOut || item.quantity <= 1}
>
  -
</button>

<span>{item.quantity}</span>

<button
  onClick={handleIncrement}
  disabled={isSoldOut || item.quantity >= item.stock}
>
  +
</button>
    </CounterWrapper>
  );
};

export default Counter;