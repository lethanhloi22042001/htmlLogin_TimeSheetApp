import React from 'react';
import { RootState } from '../../redux/storage';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from './counterSlice';
import { addUser, removeUser, selectTodoList,selectFilters } from '../userAll/Alluser';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const count2 = useSelector((state: RootState) => state.counter.value2);
  const dispatch = useDispatch();
  
  const todoList = useSelector(selectTodoList);
  const filters = useSelector(selectFilters);
  console.log('todoList',todoList);
  console.log('filters',filters);
  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count2}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
