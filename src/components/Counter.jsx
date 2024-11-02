import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, IncrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(IncrementByValue(5))} className="bg-green-600 text-white">Increment By 5</button>
            <br />
            <br />
            <button onClick={() => dispatch(increment())} className="bg-green-600 text-white">Increment</button>
            <div>{count}</div>
            <button onClick={() => dispatch(decrement())} className="bg-red-600 text-white">Decrement</button>
        </div>
    )
}

export default Counter;