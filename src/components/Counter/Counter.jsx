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

      <button onClick={() => dispatch(incrementQuantity(item.id))}>
        +
      </button>
    </CounterWrapper>
  );
};

export default Counter;