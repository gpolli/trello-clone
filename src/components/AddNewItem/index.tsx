import React, { useState } from 'react';
/* Components */
import NewItemForm from './components/NewItemForm';
/* CSS */
import './style.scss';

interface AddNewItemProps {
  onAdd(text: string): void,
  toggleButtonText: string,
  dark?: boolean,
}

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    );
  }

  return (
    <div className={`add-item__button ${dark ? 'add-item__button--dark' : ''}`} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </div>
  );
}

export default AddNewItem;
