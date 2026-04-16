import { useDispatch } from "react-redux";
import { CounterWrapper } from "./Counter.styled";
import { decrementQuantity, incrementQuantity } from "../../redux/cartSlice";

const Counter = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CounterWrapper>
      <button onClick={() => dispatch(decrementQuantity(item.id))}>
        -
      </button>

      <span>{item.quantity}</span>

      <button onClick={() => dispatch(incrementQuantity({ id: item.id, stock: item.stock }))}
         disabled={item.quantity >= item.stock}>
  +
</button>
    </CounterWrapper>
  );
};

export default Counter;