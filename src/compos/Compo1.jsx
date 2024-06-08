import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Reducer/Reducer'

const Compo1 = () => {
 
    const countr = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
<button onClick={()=>dispatch(increment())}>++</button>
<button onClick={()=>dispatch(decrement())}>--</button>

<h1>{countr}</h1>
    </div>
  )
}

export default Compo1