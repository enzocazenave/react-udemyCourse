import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counter';

import './App.css';


export const App = () => {

    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <header className="App-header">
                <p>Count is: { counter }</p>
                <p>
                    <button type="button" onClick={ () => dispatch(increment()) }>
                        Increment
                    </button>
                    <button type="button" onClick={ () => dispatch(decrement()) }>
                        Decrement
                    </button>
                    <button type="button" onClick={ () => dispatch(incrementBy(2)) }>
                        Increment by 2
                    </button>
                </p>
            </header>
        </div>
    )
}
