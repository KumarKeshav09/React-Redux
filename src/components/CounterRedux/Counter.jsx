import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementUpto } from '../../features/counterSlice';

const nums = new Array(30_000_000).fill(0).map((_,i) => {
    return {
        index: i,
        isMagical: i === 29_000_000
    }
})

function Counter() {
    const [input, setInput] = useState();
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    // const magical = nums.find(item => item.isMagical === true)
    const magical = useMemo(() => nums.find(item => item.isMagical === true), [])
    return (
        <>
            <div>Counter</div>
            <h1>{magical.index}</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())}>add</button>
            <button onClick={() => dispatch(decrement())}>sub</button>
            <button onClick={() => dispatch(incrementUpto(Number(input)))}>add{input}</button>
        </>
    )
}

export default Counter