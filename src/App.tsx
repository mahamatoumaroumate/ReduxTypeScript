import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store'
import { increment, decrement, incrementByAmount, reset } from './Slice'

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <article style={{ marginTop: '10rem' }}>
      <h1 style={{ marginTop: '2rem', textAlign: 'center' }}>
        counter
        <br />
        {count}
      </h1>
      <div className='container'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </article>
  )
}
export default App
