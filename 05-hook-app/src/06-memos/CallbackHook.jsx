import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const Callback = () => {
    const [counter, setCounter] = useState(1);

    const increment = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },[],
    )

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr/>

            <ShowIncrement increment={ increment }/>
        </>
    )
}
