import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
/* Context */
import { useAppState } from '../../context/AppStateContext';
/* Utils */
import { DragItem } from '../../utils/dragItem';
import { useItemDrag } from '../../utils/useItemDrag';
import { isHidden } from '../../utils/isHidden';
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
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    collect: monitor => {
      // Without it the drop doesn't work
      return {
        isOver: !!monitor.isOver(),
      }
    },
    hover(item: DragItem, monitor) {
      if (item.type === "COLUMN") {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        dispatch({
          type: "MOVE_LIST",
          payload: {
            dragIndex, hoverIndex
          }
        });

        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = id;

        if (sourceColumn === targetColumn) {
          return;
        }

        dispatch({
          type: "MOVE_TASK",
          payload: {
            dragIndex,
            hoverIndex,
            sourceColumn,
            targetColumn
          }
        });

        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
    },
  });

  drag(drop(ref));

  return (
    <div className={`column ${isHidden(state.draggedItem, "COLUMN", id) ? "column--is-hidden" : ""}`} ref={ref}>
      <div className="column__container">
        <div className="column__title">{text}</div>
        {state.lists[index].tasks.map((task, i) => (
          <Card
            id={task.id}
            columnId={id}
            text={task.text}
            index={i}
            key={task.id}
          />
        ))}
        <AddNewItem toggleButtonText="+ Add another task" onAdd={text => dispatch({ type: "ADD_TASK", payload: { text, listId: id } })} dark />
      </div>
    </div>
  );
}

export default Column;