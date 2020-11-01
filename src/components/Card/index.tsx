import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
/* Context */
import { useAppState } from '../../context/AppStateContext';
/* Utils */
import { CardDragItem } from '../../utils/dragItem';
import { useItemDrag } from '../../utils/useItemDrag';
import { isHidden } from '../../utils/isHidden';
/* CSS */
import './style.scss';

interface CardProps {
  columnId: string,
  index: number,
  id: string,
  text: string
}

const Card = ({ columnId, index, id, text }: CardProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "CARD", id, index, text, columnId });
  const [, drop] = useDrop({
    accept: "CARD",
    collect: monitor => {
      // Without it the drop doesn't work
      return {
        isOver: !!monitor.isOver(),
      }
    },
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

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
  });

  drag(drop(ref));

  return (
    <div className={`card ${isHidden(state.draggedItem, "CARD", id) ? "card--is-hidden" : ""}`} ref={ref}>
      <div className="card__container">{text}</div>
    </div>
  );
}

export default Card;