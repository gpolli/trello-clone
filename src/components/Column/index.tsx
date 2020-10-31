import React from 'react';
/* Context */
import { useAppState } from '../../context/AppStateContext';
/* Components */
import Card from '../Card';
import AddNewItem from '../AddNewItem';
/* CSS */
import './style.scss';

interface ColumnProps {
  text: string,
  index: number,
  id: string,
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();

  return (
    <section className="column">
      <div className="column__container">
        <div className="column__title">{text}</div>
        {state.lists[index].tasks.map(task => (
          <Card text={task.text} key={task.id} />
        ))}
        <AddNewItem toggleButtonText="+ Add another task" onAdd={text => dispatch({ type: "ADD_TASK", payload: { text, listId: id } })} dark />
      </div>
    </section>
  );
}

export default Column;